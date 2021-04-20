select 
  sum(populacao) as 'Total'
from estados

select 
  avg(populacao) as 'Total'
from estados

-- agrega por regiao e soma a populacao delas
select 
  regiao as 'Região', 
  sum(populacao) as 'Total'
from estados
group by regiao
order by 'Total' desc

