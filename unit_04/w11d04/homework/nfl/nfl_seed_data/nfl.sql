Step 3
1. SELECT name FROM teams;
2. SELECT stadium, head_coach FROM teams;
3. SELECT head_coach FROM teams WHERE conference = 'AFC';
4. SELECT COUNT(*) FROM players;


Step 4
5. SELECT name, head_coach FROM teams WHERE division = 'North' AND conference = 'NFC' OR division = 'East' AND conference = 'AFC';
6. SELECT name FROM players ORDER by salary LIMIT 50;
7. SELECT AVG(Salary) FROM players;
8. SELECT name, position FROM players WHERE salary > 10000000;

Step 5
9. SELECT name FROM players ORDER BY salary DESC LIMIT 1;
10. SELECT name, position FROM players ORDER BY salary DESC LIMIT 100;
11. SELECT AVG(salary) FROM players WHERE position = 'DE';
12. SELECT * FROM teams; (To find ID) then - SELECT name FROM players WHERE team_id = 1;
13. SELECT * FROM teams; (To find ID) then - SELECT SUM(salary) FROM players WHERE team_id = 18;
14.SELECT name FROM players WHERE team_id = 23 ORDER BY salary ASC LIMIT 1;
