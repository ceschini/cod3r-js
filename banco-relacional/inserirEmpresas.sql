-- resolvendo erro 'out of range'
ALTER TABLE empresas MODIFY cnpj varchar(14);

INSERT INTO empresas
  (nome, cnpj)
VALUES
  ('Bradesco', 75211428000182),
  ('Vale', 69988664000107),
  ('Cielo', 27557854000120);

desc empresas;
desc prefeitos;
select * from empresas;
select * from cidades;

INSERT INTO empresas_unidades
  (empresa_id, cidade_id, sede)
VALUES
  (1, 1, 1),
  (1, 2, 0),
  (2, 2, 1),
  (2, 1, 0)