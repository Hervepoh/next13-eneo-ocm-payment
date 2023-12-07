-- CreateTable
CREATE TABLE `Payment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `region` VARCHAR(191) NULL,
    `division` VARCHAR(191) NULL,
    `agency` VARCHAR(191) NULL,
    `code_agency` VARCHAR(191) NULL,
    `contract` VARCHAR(191) NULL,
    `ref_bill` VARCHAR(191) NULL,
    `ref_tango` VARCHAR(191) NULL,
    `paid_amount` VARCHAR(191) NULL,
    `ref_eneo` VARCHAR(191) NULL,
    `paid_date` VARCHAR(191) NULL,
    `statuts_om` VARCHAR(191) NULL,
    `payment_year` VARCHAR(191) NULL,
    `valided` BOOLEAN NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
