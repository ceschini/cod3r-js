insert into estados (id, nome, sigla, regiao, populacao)
values(1000, 'Novo', 'NV', 'Sul', 2.54)

select * from estados

insert into estados (nome, sigla, regiao, populacao)
values('Mais Novo', 'MN', 'Norte', 2.51) -- vai pegar o ultimo id e somar 1

select * from estados