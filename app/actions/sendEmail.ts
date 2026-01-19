"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, message: "Please fill in all required fields." };
  }

  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // If no credentials are provided (dev mode), we just simulate/log
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.log("----------------------------------------");
      console.log("📧 NEW CONTACT FORM SUBMISSION (SIMULATED)");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);
      console.log("----------------------------------------");
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return { success: true, message: "Message sent successfully (Simulated)!" };
    }

    // Actual email sending
    await transporter.sendMail({
      from: `Portfolio Contact Form <${process.env.SMTP_USER}>`, 
      to: "lonsaneonkar@gmail.com", // Send to your personal email
      replyTo: email, // Allow you to reply directly to the sender
      subject: `New Portfolio Inquiry from ${name}`,
      text: `
        You received a new message from your portfolio website.

        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New Inquiry from your Portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Failed to send message. Please try again." };
  }
}
