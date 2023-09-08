// import type { RequestEvent } from "@sveltejs/kit";
// import { json } from "@sveltejs/kit";
// import nodemailer from "nodemailer";

// /**
//  * Handles an HTTP POST request and sends an email using the Nodemailer library.
//  * @param requestEvent - The RequestEvent object containing the HTTP request data.
//  * @returns A JSON response indicating the completion of the email function.
//  */
// export async function POST(requestEvent: RequestEvent) {
//   try {
//     const body = await requestEvent.request.json();

//     if (!body.email || !body.message || body.email === "" || body.message === "") {
//       return json({}, { status: 400 });
//     }

//     const account = await nodemailer.createTestAccount();

//     const mailTransporter = nodemailer.createTransport({
//       host: "smtp.ethereal.email",
//       auth: {
//         user: account.user,
//         pass: account.pass,
//       },
//     });

//     const mailDetails = {
//       from: body.email,
//       to: "mathuyrgopal@gmail.com",
//       subject: `${body.email} has sent a new message`,
//       text: body.message,
//     };

//     await mailTransporter.sendMail(mailDetails);

//     return json({}, { status: 200 });
//   } catch (err) {
//     console.log(err);
//     return json({ err }, { status: 501 });
//   }
// }

import type { RequestEvent } from "@sveltejs/kit";
import { json } from "@sveltejs/kit";
import nodemailer from "nodemailer";

export async function POST(requestEvent: RequestEvent) {
  const body = await requestEvent.request.json();

  if (
    !body.email ||
    !body.message ||
    body.email === "" ||
    body.message === ""
  ) {
    return json({}, { status: 400 });
  }

  console.log("got here");

  const mailTransporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: "ezinorepvtltd@gmail.com",
      pass: "tlxsrmboyoijhfqb",
    },
  });

  const mailDetails = {
    from: body.email,
    to: "ezinorepvtltd@gmail.com",
    // to: "ezinorepvtltd@gmail.com",
    subject: body.email + " has sent a new message",
    text: body.message,
  };

  let response;
  let code;

  mailTransporter
    .sendMail(mailDetails)
    .then((info) => {
      console.log("sent");
      console.log(info);
      response = info;
      code = 200;

      return json(
        { response: response, email: body.email, code: code },
        { status: code }
      );

      // console.log()
    })
    .catch((err) => {
      console.log(err);
      response = err;
      code = 501;
    });

  return json(
    { response: response, email: body.email, code: code },
    { status: code }
  );

  // mailTransporter.sendMail(mailDetails, function (err: unknown) {
  //   if (err) {
  //     console.log("sent");
  //     return json({}, { status: 501 });
  //   } else {
  //     console.log(err);
  //     return json({}, { status: 200 });
  //   }
  // });
}
