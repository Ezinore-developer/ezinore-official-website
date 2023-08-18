import type { RequestEvent } from "@sveltejs/kit";
import { json } from "@sveltejs/kit";
import nodemailer from "nodemailer";

export async function POST(requestEvent: RequestEvent) {
  const body = await requestEvent.request.json();

  if (!body.email || !body.message) {
    return json({}, { status: 400 });
  }

  if (body.email === "" || body.message === "") {
    return json({}, { status: 400 });
  }

  const mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mathuyrgopal@gmail.com",
      pass: "bctfiadnajwwnvxx",
    },
  });

  const mailDetails = {
    from: body.email,
    to: "connect@ezinore.com",
    // to: "mathuyrgopal@gmail.com",
    subject: body.email + " has sent a new message",
    text: body.message,
  };

  mailTransporter.sendMail(mailDetails, function (err: unknown) {
    if (err) {
      return json({}, { status: 501 });
    } else {
      return json({}, { status: 200 });
    }
  });

  return json({ message: "completed email function" });
}

// import type { RequestEvent } from "@sveltejs/kit";
// import { json } from "@sveltejs/kit";

// import { SES } from "aws-sdk";

// export async function POST(requestEvent: RequestEvent) {
//   const body = await requestEvent.request.json();

//   const ses = new SES({ region: "eu-west-1" });
//   const params = {
//     Source: body.email,
//     Destination: {
//       ToAddresses: ["mathuyrgopal@gmail.com"],
//     },
//     Message: {
//       Body: {
//         Text: {
//           Data: body.message,
//         },
//       },
//       Subject: {
//         Data: `New message from ${body.email}`,
//       },
//     },
//   };

//   try {
//     const result = await ses.sendEmail(params).promise();
//     json(result);
//   } catch (error) {
//     json(error);
//   }

//   return json({ message: "completed email function" });
// }
