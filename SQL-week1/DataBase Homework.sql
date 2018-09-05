--1.Select all the customers from Brussels
SELECT * FROM customers WHERE city = "Brussels";


--2.Select all the invoices of more than 10 euros
SELECT * FROM invoices WHERE total > 10;


--3.Select all the tracks of the Rock genre ordered by track name
-- LEFT JOIN table2 ON table1.column_name = table2.column_name;
SELECT * FROM tracks
LEFT JOIN genres ON tracks.GenreId = genres.GenreId
WHERE genres.Name = "Rock"
ORDER BY tracks.Name


--4.Select all the albums of R.E.M.
SELECT * FROM albums
LEFT JOIN artists ON albums.ArtistId = artists.ArtistId
WHERE artists.Name = "R.E.M."


--5.Select all the invoices of which an album of U2 was bought
SELECT * FROM invoices
LEFT JOIN invoice_items ON invoices.InvoiceId = invoice_items.InvoiceId
LEFT JOIN tracks ON invoice_items.TrackId = tracks.TrackId
LEFT JOIN albums ON tracks.AlbumId = albums.AlbumId
LEFT JOIN artists ON albums.ArtistId = artists.ArtistId
WHERE artists.Name = "U2"


--6.Select all the customers who bought for more than 10€ on one invoice
SELECT * FROM customers
LEFT JOIN invoices on invoices.CustomerId = customers.CustomerId
where invoices.Total > 10 order by total

--7.How many tracks are in the database?
SELECT COUNT(trackId) FROM tracks;

--8.Select all the different countries of the clients?
SELECT DISTINCT Country FROM Customers;

--9.What is the total cost of the most expensive invoice (2 solutions possible)?

-- First solution:
SELECT MAX(Total) FROM invoices;

-- Second solution:
SELECT total FROM invoices ORDER BY total DESC limit 1;


--10.What is the average total cost of an invoice?
SELECT AVG(total) FROM invoices;

--11.How many tracks are in the database of the band Pearl Jam?
SELECT COUNT(trackId) FROM tracks
LEFT JOIN albums ON tracks.AlbumId = albums.AlbumId
LEFT JOIN artists ON albums.ArtistId = artists.ArtistId
WHERE artists.Name = "Pearl Jam"

--12.Extremely hard: Select all the albums that have tracks of at least two different genres 
SELECT albums.AlbumId,albums.Title
FROM albums
LEFT JOIN tracks ON albums.AlbumId = tracks.AlbumId
LEFT JOIN genres ON tracks.GenreId =genres.GenreId
GROUP BY tracks.albumid
HAVING COUNT(distinct genres.GenreId) > 1
