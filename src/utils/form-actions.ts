"use server";
import { revalidatePath } from "next/cache";
import db from "./db";

export const newContactInfor = async (formData: FormData) => {
  await db.contactMessages.create({
    data: {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      role: formData.get("role") as string,
      inquiryType: formData.get("inquiryType") as string,
      message: formData.get("message") as string,
    },
  });

  revalidatePath("/contactMessage");
  // Do not return anything
};
