import { json } from "@sveltejs/kit";
import type { RequestEvent } from "@sveltejs/kit";
import stateCategory from "$lib/data/stateCategory";
import states from "$lib/data/states";
import irradiation from "$lib/data/irradiation";
import costData from "$lib/data/costData";

export async function POST(requestEvent: RequestEvent) {
  const body = await requestEvent.request.json();

  let plantSize;
  let outputWithoutSubsidy;
  const stateNum = getStateNumFromName(body.state);
  const category = getStateCategory(stateNum);

  // for rooftop area
  if (body.selectedOption === 0) {
    plantSize = (body.area * body.areaPercentage) / 1000;
    if (plantSize > 500) {
      json(
        { message: "Maximum limit of capacity cannot go beyound 500kW" },
        { status: 204 }
      );
    }
    const cost1 = getBenchmark(plantSize, category);

    outputWithoutSubsidy = plantSize * cost1;
  }
  // for solar panel capacity
  else if (body.selectedOption === 1) {
    plantSize = body.capacity;

    if (plantSize > 500) {
      json(
        { message: "Maximum limit of capacity cannot go beyound 500kW" },
        { status: 204 }
      );
    }
    const cost2 = getBenchmark(plantSize, category);
    outputWithoutSubsidy = Number(plantSize * cost2);
  }
  // for budget
  else {
    plantSize = getPlantSizeBudget(body.budget, category);
    if (body.capacity > 500) {
      json(
        { message: "Maximum limit of capacity cannot go beyound 500kW" },
        { status: 204 }
      );
    }
  }

  const benchmark = getBenchmark(plantSize, category);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const outputIrradiation = getIrradiation(stateNum!);
  const generate = outputIrradiation * 0.0036 * 1.1;

  const outputElectricityAnnual = Math.round(generate * plantSize * 300);
  const outputElectricityLifetime = outputElectricityAnnual * 25;

  const a = outputElectricityLifetime * 0.82;
  const co2 = Math.round(a / 1000);
  const trees = Math.round(a / 625);

  const outputSavingAnnual = Math.round(
    outputElectricityAnnual * body.electricityCost
  );

  const outputSavingMonthly =
    (outputElectricityAnnual / 12) * body.electricityCost;

  // const subsidyForHeading = getSubsidyForHeading(plantSize, body.customerType);

  const outputSubsidy = getProjectSubsidizedAmount(
    plantSize,
    body.customerType,
    benchmark
  );
  const outputSavingLifetime = outputSavingAnnual * 25;

  // const subsidyAmount = Math.round(
  //   Number(outputWithoutSubsidy) - Number(outputSubsidy)
  // );


  return json({
    sate: body.state,
    outputIrradiation,
    generate: parseFloat(Number(generate).toFixed(1)),
    plantSize,
    benchmark,
    outputSubsidy,
    outputElectricityAnnual,
    outputElectricityLifetime,
    electricityCost: body.electricityCost,
    outputSavingMonthly,
    outputSavingAnnual,
    outputSavingLifetime,
    co2,
    trees,
    outputWithoutSubsidy,
    // subsidyAmount,
    // subsidyForHeading,
  });
}

function getStateNumFromName(stateName: string): number {
  let num = 0;
  for (let i = 0; i < states.length; i++) {
    if (states[i].name === stateName) {
      num = states[i].value;
      return states[i].value;
    }
  }
  return num;
}

function getBenchmark(plantSize: number, category: string): number {
  let benchmark = 0;
  for (let i = 0; i < costData.length; i++) {
    if (plantSize == 1) {
      if (
        costData[i].category == category &&
        plantSize == costData[i].rangeTo
      ) {
        const cost = costData[i].cost;
        benchmark = cost;
      }
    } else {
      if (
        costData[i].category == category &&
        plantSize > costData[i].rangeFrom &&
        plantSize <= costData[i].rangeTo
      ) {
        const cost = costData[i].cost;
        benchmark = cost;
      }
    }
  }
  return benchmark;
}

function getStateCategory(state: number): string {
  const category = "";
  for (let i = 0; i < stateCategory.length; i++) {
    if (stateCategory[i].state == state) {
      return stateCategory[i].category;
    }
  }

  return category;
}

function getIrradiation(state: number): number {
  let irr = 0;
  for (let i = 0; i < irradiation.length; i++) {
    if (irradiation[i].state == state) {
      irr = irradiation[i].irradiation;
    }
  }

  return irr;
}

function getPlantSizeBudget(budget: number, category: string): number {
  const capacity_array = [];
  let largest = 0;

  let x = 0;
  for (let i = 0; i < costData.length; i++) {
    if (costData[i].category == category) {
      const cost = costData[i].cost;
      //let cost = cost*1000;//dated 20 Dec 2021
      const min_budget = costData[i].rangeFrom * cost;
      const max_budget = costData[i].rangeTo * cost;

      if (budget >= min_budget && budget <= max_budget) {
        const capacity_val = budget / cost;
        capacity_array[x] = capacity_val;
        x = x + 1;
      }
    }
  }

  for (let i = 0; i < capacity_array.length; i++) {
    if (largest < capacity_array[i]) {
      largest = capacity_array[i];
    }
  }

  return largest;
}

// function getSubsidyForHeading(plantSize: number, customerType: string): string {
//   let subsidy = "";

//   if (customerType === "Residential") {
//     if (plantSize <= 3) {
//       subsidy = "40%";
//     } else {
//       subsidy = "40% upto 3kW & 20% above 3kW upto 10kW";
//     }
//   } else {
//     subsidy = "0";
//   }

//   return subsidy;
// }

function getProjectSubsidizedAmount(
  plantSize: number,
  customerType: string,
  benchmark: number
) {
  let projectCost = 0;

  if (customerType === "Residential") {
    if (plantSize <= 3) {
      const subsidy = 40;
      const subsidyAmount = 1 - subsidy / 100;
      projectCost = benchmark * plantSize * subsidyAmount;
    } else if (plantSize > 3 && plantSize <= 10) {
      const subsidy = 40;
      const subsidy2 = 20;
      const subsidyAmount2 = 1 - subsidy2 / 100;
      const plantSizeLeft = plantSize - 3;

      const projectCost2 = Number(benchmark * plantSizeLeft * subsidyAmount2);
      const projectCost1 = Number(benchmark * 3 * subsidy);
      projectCost = projectCost1 + projectCost2;
    } else if (plantSize > 10) {
      const subsidy = 40;

      const subsidy2 = 20;
      const subsidyAmount2 = 1 - subsidy2 / 100;
      const plantSizeLeft = plantSize - 10;

      const projectCost2 = benchmark * 7 * subsidyAmount2;
      const projectCost1 = benchmark * 3 * subsidy;
      const projectCost3 = benchmark * plantSizeLeft;

      projectCost = Number(projectCost1 + projectCost2 * projectCost3);
    }
  } else {
    projectCost = Number(benchmark * plantSize);
  }

  return Math.round(projectCost);
}
