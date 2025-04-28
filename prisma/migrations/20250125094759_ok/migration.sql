/*
  Warnings:

  - You are about to drop the column `Aditional` on the `Application` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Application" DROP COLUMN "Aditional",
ADD COLUMN     "additional" TEXT;

-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "mode" "Mode"[];

-- CreateTable
CREATE TABLE "_ApplicationCourses" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ApplicationCourses_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ApplicationCourses_B_index" ON "_ApplicationCourses"("B");

-- AddForeignKey
ALTER TABLE "_ApplicationCourses" ADD CONSTRAINT "_ApplicationCourses_A_fkey" FOREIGN KEY ("A") REFERENCES "Application"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ApplicationCourses" ADD CONSTRAINT "_ApplicationCourses_B_fkey" FOREIGN KEY ("B") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;
