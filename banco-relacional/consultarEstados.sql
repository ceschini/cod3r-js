select * from estados

-- estados.nome eh bom quando tem mais de uma tabela com o mesmo campo 'nome'
select estados.nome, sigla from estados

select nome, sigla from estados
where regiao = 'Sul' -- filtro

select nome, populacao from estados
where populacao >= 10
order by populacao desc -- padrao crescente