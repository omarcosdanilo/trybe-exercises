-- Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
SELECT sum(SALARY) as total_salarios FROM hr.employees;