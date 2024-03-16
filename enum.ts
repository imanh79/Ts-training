// یک لیست برای ذخایر مقادیر می باشد
// برای تمیز شدن کد ها و جلوگیری از مقادیر تکراری
export enum errormessages {
  ERROR_TOAST_MESSAGES = "THE USER NOT FOUND!",
  SUCCESS_TOAST_MESSAGES = "THE USER FONDED!",
  NOTFOUND = 404,
  OK = 200,
}
export enum OrderStatus {
  PENDING = "Pending",
  PROCESSING = "Processing",
  SHIPPED = "Shipped",
  DELIVERED = "Delivered",
  CANCELED = "Canceled",
}

export enum UserRole {
  ADMIN = "Admin",
  MODERATOR = "Moderator",
  USER = "User",
}

export enum TransactionType {
  DEPOSIT = "Deposit",
  WITHDRAWAL = "Withdrawal",
  TRANSFER = "Transfer",
  PAYMENT = "Payment",
}

export enum FileStatus {
  UPLOADING = "Uploading",
  PROCESSING = "Processing",
  COMPLETED = "Completed",
  FAILED = "Failed",
}
