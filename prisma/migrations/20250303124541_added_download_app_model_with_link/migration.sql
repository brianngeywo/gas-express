/*
  Warnings:

  - Added the required column `playStoreLink` to the `DownloadAppAction` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DownloadAppAction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "pitchText" TEXT NOT NULL,
    "playStoreLink" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_DownloadAppAction" ("createdAt", "id", "pitchText", "title", "updatedAt") SELECT "createdAt", "id", "pitchText", "title", "updatedAt" FROM "DownloadAppAction";
DROP TABLE "DownloadAppAction";
ALTER TABLE "new_DownloadAppAction" RENAME TO "DownloadAppAction";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
