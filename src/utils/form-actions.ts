"use server";
import { revalidatePath } from "next/cache";
import db from "./db";


export const newContactInfor = async (formData) => {
  const contact = await db.contactMessages.create({
    data: {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      role: formData.get('role'),
      inquiryType: formData.get('inquiryType'),
      message: formData.get('message'),
    },
  });

  revalidatePath('/contactMessage');
};

