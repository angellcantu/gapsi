-- DROP SCHEMA dbo;

CREATE SCHEMA dbo;
-- gapsi.dbo.catalogs definition

-- Drop table

-- DROP TABLE gapsi.dbo.catalogs;

CREATE TABLE gapsi.dbo.catalogs (
	id int IDENTITY(1,1) NOT NULL,
	name nvarchar(50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	description nvarchar(200) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	active bit DEFAULT 1 NOT NULL,
	created_at datetime DEFAULT getdate() NOT NULL,
	updated_at datetime NULL,
	CONSTRAINT PK_1883399275415ee6107413fe6c3 PRIMARY KEY (id)
);


-- gapsi.dbo.products definition

-- Drop table

-- DROP TABLE gapsi.dbo.products;

CREATE TABLE gapsi.dbo.products (
	id nvarchar(10) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	name nvarchar(20) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	description nvarchar(200) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	price float NOT NULL,
	model nvarchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	active bit DEFAULT 1 NOT NULL,
	created_at datetime DEFAULT getdate() NOT NULL,
	updated_at datetime NULL,
	catalogsId int NULL,
	CONSTRAINT PK_0806c755e0aca124e67c0cf6d7d PRIMARY KEY (id),
	CONSTRAINT UQ_4c9fb58de893725258746385e16 UNIQUE (name),
	CONSTRAINT FK_4d0ff43089ba558eab00af6964a FOREIGN KEY (catalogsId) REFERENCES gapsi.dbo.catalogs(id)
);


