/*
  Warnings:

  - Added the required column `quantity` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `SheinOrder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` ADD COLUMN `quantity` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `sheinorder` ADD COLUMN `quantity` INTEGER NOT NULL;
