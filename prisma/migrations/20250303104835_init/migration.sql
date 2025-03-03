-- CreateTable
CREATE TABLE "HeaderImage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "top" TEXT NOT NULL,
    "left" TEXT,
    "right" TEXT,
    "image" TEXT NOT NULL,
    "shadow" TEXT
);

-- CreateTable
CREATE TABLE "ContactMessages" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "inquiryType" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
