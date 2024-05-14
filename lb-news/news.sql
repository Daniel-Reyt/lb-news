CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(55) NOT NULL,
  `description` varchar(55) NOT NULL,
  `message` longtext NOT NULL,
  PRIMARY KEY (`id`),
)

INSERT INTO `jobs`(`name`, `label`, `whitelisted`, `handyservice`, `hasapp`, `onlyboss`) VALUES ('news','News', 1, 0, 0, 0)

INSERT INTO `job_grades`(`job_name`, `grade`, `name`, `label`, `salary`) VALUES ('news', 0, 'journaliste','Journaliste',25)
INSERT INTO `job_grades`(`job_name`, `grade`, `name`, `label`, `salary`) VALUES ('news', 1, 'reporter','Reporter',50)
INSERT INTO `job_grades`(`job_name`, `grade`, `name`, `label`, `salary`) VALUES ('news', 2, 'chief','Chef Rédaction',50)
INSERT INTO `job_grades`(`job_name`, `grade`, `name`, `label`, `salary`) VALUES ('news', 3, 'pdg','PDG',100)

CREATE TABLE `liked_news` (
  `id_news` int(11) NOT NULL,
  `identifier` varchar(60) NOT NULL,
  KEY `id_news` (`id_news`,`identifier`)
)