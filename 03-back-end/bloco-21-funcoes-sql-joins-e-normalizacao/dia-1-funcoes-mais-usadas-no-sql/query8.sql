-- Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras (IT_PROG).
select job_id, sum(SALARY) `total_salarios_por_profissão`
from hr.employees
GROUP BY job_id
HAVING JOB_ID = 'IT_PROG';