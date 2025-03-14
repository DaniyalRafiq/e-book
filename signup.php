<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = isset($_POST["name"]) ? $_POST["name"] : '';
  $email = isset($_POST["email"]) ? $_POST["email"] : '';
  $phone = isset($_POST["phone"]) ? $_POST["phone"] : '';
  $message = isset($_POST["message"]) ? $_POST["message"] : '';

  $admin_email = "bb420f@gmail.com"; // Admin email
  $subject_admin = "New Order Alert: The Kingdom Bible—New Testament"; // Subject for admin
  $subject_user = "Your Order Confirmation - The Kingdom Bible"; // Subject for user

  // Email content for admin
  $message_admin = "New order received:\n\n";
  $message_admin .= "Name: $name\n";
  $message_admin .= "Email: $email\n";
  $message_admin .= "Phone: $phone\n";
  $message_admin .= "Message: $message\n";

  // Email content for user
  $message_user = "Hello $name,\n\n";
  $message_user .= "Thank you for your order. Here are the details:\n\n";
  $message_user .= "Name: $name\n";
  $message_user .= "Email: $email\n";
  $message_user .= "Phone: $phone\n";
  $message_user .= "Message: $message\n\n";
  $message_user .= "We will get back to you soon!\n\n";
  $message_user .= "Best Regards,\nThe Kingdom Bible Team";

  $headers = "From: $admin_email\r\n";
  $headers .= "Reply-To: $admin_email\r\n";

  // Send email to admin
  mail($admin_email, $subject_admin, $message_admin, $headers);

  // Send email to user
  mail($email, $subject_user, $message_user, $headers);

  // Redirect to thank you page
  header("Location: thank-you");
  exit();
}
