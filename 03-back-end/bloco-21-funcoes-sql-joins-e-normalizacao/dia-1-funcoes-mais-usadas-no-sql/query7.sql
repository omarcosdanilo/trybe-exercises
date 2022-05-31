-- 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão (JOB_ID).
select * from hr.employees;
select job_id, sum(SALARY) `total_salarios_por_profissão`
from hr.employees
GROUP BY job_id;