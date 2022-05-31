-- #5. 🚀 Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT
	round(max(SALARY), 2),
	round(min(SALARY), 2),
	round(sum(SALARY), 2),
	round(avg(SALARY), 2)
FROM hr.employees;