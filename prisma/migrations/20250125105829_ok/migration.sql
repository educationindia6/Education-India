/*
  Warnings:

  - Added the required column `opted` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enrollmentId` to the `CourseEnrollment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Application" ADD COLUMN     "opted" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CourseEnrollment" ADD COLUMN     "enrollmentId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "CourseEnrollment" ADD CONSTRAINT "CourseEnrollment_enrollmentId_fkey" FOREIGN KEY ("enrollmentId") REFERENCES "Enrollment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
