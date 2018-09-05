--1.Select all the customers from Brussels
select * from customers where city = "Brussels"


--2.Select all the invoices of more than 10 euros
select * from invoices where total > 10


--3.Select all the tracks of the Rock genre ordered by track name
-- LEFT JOIN table2 ON table1.column_name = table2.column_name;
select * from tracks
LEFT JOIN genres ON tracks.TrackId = genres.GenreId
 where genres.Name = "Rock"
 order by tracks.Name


--4.Select all the albums of R.E.M.
select * from albums 
LEFT JOIN artists ON albums.ArtistId = artists.ArtistId
where artists.Name = "R.E.M."

--5.Select all the invoices of which an album of U2 was bought

--6.Very Hard: Select all the customers who bought for more than 10€ on one invoice
SELECT * FROM customers
LEFT JOIN invoices ON invoices.CustomerId = customers.CustomerId
WHERE invoices.Total > 10 order by total

--7.How many tracks are in the database?
SELECT COUNT(*) FROM tracks

--8.Select all the different countries of the clients?
SELECT DISTINCT Country FROM Customers

--9.What is the total cost of the most expensive invoice (2 solutions possible)?
-- First Solution
SELECT MAX(Total) FROM invoices
-- Second Solution
SELECT total FROM invoices ORDER BY total DESC limit 1

--10.What is the average total cost of an invoice?
SELECT AVG(total) FROM invoices

-- 11.Hard: How many tracks are in the database of the band Pearl Jam?
