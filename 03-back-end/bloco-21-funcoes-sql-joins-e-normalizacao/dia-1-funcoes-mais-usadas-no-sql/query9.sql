-- 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras (IT_PROG).
SELECT job_id, avg(salary) AS media_salarial
FROM hr.employees
GROUP BY job_id
HAVING JOB_ID <> 'IT_PROG'
ORDER BY media_salarial DESC;