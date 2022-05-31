-- 3. 🚀 Escreva uma query que exiba a média salarial de cada JOB_ID, ordenando pela média salarial em ordem decrescente.
 SELECT job_id, avg(salary) as média_salarial
 FROM hr.employees
 GROUP BY job_id
 ORDER BY média_salarial desc;