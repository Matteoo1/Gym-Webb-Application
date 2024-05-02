-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 22, 2023 at 01:37 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shop1`
--

-- --------------------------------------------------------

--
-- Table structure for table `training`
--

CREATE TABLE `training` (
  `name_of_workout` varchar(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `Repsnumber` int(3) NOT NULL,
  `Setsnumber` int(3) NOT NULL,
  `plan_name` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `training`
--

INSERT INTO `training` (`name_of_workout`, `username`, `Repsnumber`, `Setsnumber`, `plan_name`, `image`) VALUES
('Lateral rai', 'ka', 2, 1, 'Monday', 'Workout pictures/lateralraise.jpg'),
('Shoulder pr', 'ka', 4, 3, 'Monday', 'Workout pictures/shoulderpress.jpg'),
('cable face', 'ka', 6, 5, 'Monday', 'Workout pictures/ cableface.jpg'),
('Bike', 'ka', 0, 6, 'Monday', 'Workout pictures/bike.jpg'),
('Cable flyes', 'ka', 2, 21, 'Friday', 'Workout pictures/cableflyes.jpg'),
('Bike', 'ka', 4, 0, 'Friday', 'Workout pictures/bike.jpg'),
('Quad extens', 'ka', 0, 3, 'Friday', 'Workout pictures/quadextension.jpg'),
('Cable row', 'ka', 5, 0, 'Friday', 'Workout pictures/cablerow.jpg'),
('pull upp', 'ka', 0, 5, 'Friday', 'Workout pictures/pullup.jpg'),
('leg press', 'ka', 4, 0, 'Tisdag', 'Workout pictures/leggpress.jpg'),
('Dumbbell ro', 'ka', 4, 5, 'Tisdag', 'Workout pictures/dumbbellrow.jpg'),
('Cable row', 'ka', 3, 3, 'Tisdag', 'Workout pictures/cablerow.jpg'),
('pull upp', 'ka', 5, 2, 'Tisdag', 'Workout pictures/pullup.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `is_admin` tinyint(1) NOT NULL DEFAULT 0,
  `first_name` varchar(30) DEFAULT NULL,
  `last_name` varchar(30) DEFAULT NULL,
  `country` varchar(40) DEFAULT NULL,
  `province` varchar(40) DEFAULT NULL,
  `city` varchar(40) DEFAULT NULL,
  `street` varchar(40) DEFAULT NULL,
  `building` varchar(40) DEFAULT NULL,
  `postal_code` varchar(40) DEFAULT NULL,
  `phone` varchar(40) DEFAULT NULL,
  `has_address` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `created_at`, `is_admin`, `first_name`, `last_name`, `country`, `province`, `city`, `street`, `building`, `postal_code`, `phone`, `has_address`) VALUES
(10, 'admin', 'admin@yourclothes.com', 'a', '2020-05-14 12:52:24', 1, 'admin', 'adminaa', 'Sweden', 'Ã–stergotland', 'mo', 'st', '2', '51973', '0987654', 1),
(18, 'qwerrr', 'asflasnfk@gmail.com', '$2y$10$LXKKJqNthqHKu9TKZmTtSuA0uoD.7GgxPClgE6lKdPsR2AIpGng9i', '2020-05-16 16:49:18', 0, 'ADSASD', 'ASD', 'ASDA', 'ASD', 'ads', 'aDSA', 'ASDA', 'Ads', '12313', 1),
(19, 'hii', 'alsdjkgas@gmail.com', '$2y$10$TuBCtJ05nDbXf6bH3gEyYeMW6dhcFyY7QrA3XtlNmyVtBLMAO5CBa', '2020-05-27 17:17:57', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0),
(20, 'karim', 'gdbffds@gmail.com', '$2y$10$Q.Em4uShsL7a.2qH1yW1q.iJ76hEPaxY62mZC6DPdc9327Q6u58YS', '2023-09-18 21:52:22', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0),
(21, 'admin1', 'lsdkjfgn@gmail.com', '$2y$10$S3Q8MzortzQoZn21y2mXc.jyQZpucyPe/f8zQ9Ge4qpQXuc81ydA.', '2023-09-18 23:10:00', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0),
(22, 'ka', 'kkjk@jk', '$2y$10$hrzIUx0R/NYPuMoWHsvtoeKtnKZCbUmh096Sluo/o0pys32wNWfZK', '2023-09-28 13:51:59', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
