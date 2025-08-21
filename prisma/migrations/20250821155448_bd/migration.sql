/*
  Warnings:

  - The primary key for the `travelers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_travelers` on the `travelers` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `travelers` table. All the data in the column will be lost.
  - Added the required column `id_traveler` to the `travelers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_user` to the `travelers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `travelers` DROP PRIMARY KEY,
    DROP COLUMN `id_travelers`,
    DROP COLUMN `name`,
    ADD COLUMN `id_traveler` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `id_user` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id_traveler`);

-- CreateTable
CREATE TABLE `reservations` (
    `id_resertion` INTEGER NOT NULL AUTO_INCREMENT,
    `id_reserve_state` INTEGER NOT NULL,
    `date_state` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `id_user` INTEGER NOT NULL,
    `id_package_touristic` INTEGER NOT NULL,

    PRIMARY KEY (`id_resertion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `activities` (
    `id_activity` INTEGER NOT NULL AUTO_INCREMENT,
    `name_activity` VARCHAR(191) NOT NULL,
    `description_activity` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_activity`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `packages_activities` (
    `id_package_activity` INTEGER NOT NULL AUTO_INCREMENT,
    `id_ativity` INTEGER NOT NULL,

    PRIMARY KEY (`id_package_activity`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `places_recreationals` (
    `id_place_recreational` INTEGER NOT NULL AUTO_INCREMENT,
    `geographical_location` VARCHAR(191) NOT NULL,
    `email_place_recreational` VARCHAR(191) NOT NULL,
    `place_name` VARCHAR(191) NOT NULL,
    `id_user` INTEGER NOT NULL,

    UNIQUE INDEX `places_recreationals_email_place_recreational_key`(`email_place_recreational`),
    PRIMARY KEY (`id_place_recreational`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `packages_touristics` (
    `id_package_touristic` INTEGER NOT NULL AUTO_INCREMENT,
    `name_package_touristic` VARCHAR(191) NOT NULL,
    `description_package_touristic` VARCHAR(191) NOT NULL,
    `days_durations` DATETIME(3) NOT NULL,
    `price_package_touristic` INTEGER NOT NULL,
    `id_place_recreational` INTEGER NOT NULL,

    PRIMARY KEY (`id_package_touristic`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payments` (
    `id_payment` INTEGER NOT NULL AUTO_INCREMENT,
    `amount` INTEGER NOT NULL,
    `method` VARCHAR(191) NOT NULL,
    `payment_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `id_reservation` INTEGER NOT NULL,

    PRIMARY KEY (`id_payment`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `types_documents` (
    `id_type_document` INTEGER NOT NULL AUTO_INCREMENT,
    `ducument_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_type_document`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id_user` INTEGER NOT NULL AUTO_INCREMENT,
    `name_user` VARCHAR(191) NOT NULL,
    `lastname_user` VARCHAR(191) NOT NULL,
    `number_document` INTEGER NOT NULL,
    `id_type_document` INTEGER NOT NULL,
    `date_birth` DATETIME(3) NOT NULL,
    `direction_user` VARCHAR(191) NOT NULL,
    `email_user` VARCHAR(191) NOT NULL,
    `id_role_user` INTEGER NOT NULL,

    PRIMARY KEY (`id_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roles_users` (
    `id_role_user` INTEGER NOT NULL AUTO_INCREMENT,
    `id_admin` INTEGER NOT NULL,
    `id_traveler` INTEGER NOT NULL,
    `id_admin_place` INTEGER NOT NULL,
    `id_logistic_agent` INTEGER NOT NULL,

    UNIQUE INDEX `roles_users_id_admin_key`(`id_admin`),
    UNIQUE INDEX `roles_users_id_traveler_key`(`id_traveler`),
    UNIQUE INDEX `roles_users_id_admin_place_key`(`id_admin_place`),
    UNIQUE INDEX `roles_users_id_logistic_agent_key`(`id_logistic_agent`),
    PRIMARY KEY (`id_role_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `admins` (
    `id_admin` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,

    PRIMARY KEY (`id_admin`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `admins_places` (
    `id_admin_place` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,

    PRIMARY KEY (`id_admin_place`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `logistics_agents` (
    `id_logistic_agent` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,

    PRIMARY KEY (`id_logistic_agent`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reserved_states` (
    `id_reserve_state` INTEGER NOT NULL AUTO_INCREMENT,
    `state_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_reserve_state`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `reservations` ADD CONSTRAINT `reservations_id_reserve_state_fkey` FOREIGN KEY (`id_reserve_state`) REFERENCES `reserved_states`(`id_reserve_state`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reservations` ADD CONSTRAINT `reservations_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reservations` ADD CONSTRAINT `reservations_id_package_touristic_fkey` FOREIGN KEY (`id_package_touristic`) REFERENCES `packages_touristics`(`id_package_touristic`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `packages_activities` ADD CONSTRAINT `packages_activities_id_ativity_fkey` FOREIGN KEY (`id_ativity`) REFERENCES `activities`(`id_activity`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `places_recreationals` ADD CONSTRAINT `places_recreationals_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `packages_touristics` ADD CONSTRAINT `packages_touristics_id_place_recreational_fkey` FOREIGN KEY (`id_place_recreational`) REFERENCES `places_recreationals`(`id_place_recreational`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payments` ADD CONSTRAINT `payments_id_reservation_fkey` FOREIGN KEY (`id_reservation`) REFERENCES `reservations`(`id_resertion`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_id_type_document_fkey` FOREIGN KEY (`id_type_document`) REFERENCES `types_documents`(`id_type_document`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_id_role_user_fkey` FOREIGN KEY (`id_role_user`) REFERENCES `roles_users`(`id_role_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `admins` ADD CONSTRAINT `admins_id_admin_fkey` FOREIGN KEY (`id_admin`) REFERENCES `roles_users`(`id_admin`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `admins` ADD CONSTRAINT `admins_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `travelers` ADD CONSTRAINT `travelers_id_traveler_fkey` FOREIGN KEY (`id_traveler`) REFERENCES `roles_users`(`id_traveler`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `travelers` ADD CONSTRAINT `travelers_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `admins_places` ADD CONSTRAINT `admins_places_id_admin_place_fkey` FOREIGN KEY (`id_admin_place`) REFERENCES `roles_users`(`id_admin_place`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `admins_places` ADD CONSTRAINT `admins_places_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `logistics_agents` ADD CONSTRAINT `logistics_agents_id_logistic_agent_fkey` FOREIGN KEY (`id_logistic_agent`) REFERENCES `roles_users`(`id_logistic_agent`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `logistics_agents` ADD CONSTRAINT `logistics_agents_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;
