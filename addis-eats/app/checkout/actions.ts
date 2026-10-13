"use server";

type CheckoutState = {
  success: boolean;
  message: string;
};

export async function checkoutAction(
  _previousState: CheckoutState,
  formData: FormData
): Promise<CheckoutState> {
  const customerName = formData.get("customerName");
  const email = formData.get("email");
  if (
    typeof customerName !== "string" ||
    customerName.trim() === "" ||
    typeof email !== "string" ||
    email.trim() === ""
  ) {
    return {
      success: false,
      message: "Please enter your name and email.",
    };
  }
  return {
    success: true,
    message: `Thank you, ${customerName}! Your form was submitted.`,
  };
}