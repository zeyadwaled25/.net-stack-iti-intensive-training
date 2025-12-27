USE Company_SD;

SELECT Dep.Dependent_name, Dep.Sex
FROM Dependent Dep
JOIN Employee E ON Dep.Essn = E.SSN
WHERE Dep.Sex = 'F' AND E.Sex = 'F'
UNION
SELECT Dep.Dependent_name, Dep.Sex
FROM Dependent Dep
JOIN Employee E ON Dep.Essn = E.SSN
WHERE Dep.Sex = 'M' AND E.Sex = 'M';

SELECT P.Pname, SUM(W.Hours) AS Total_Hours
FROM Project P
JOIN Works_for W ON P.Pnumber = W.Pno
GROUP BY P.Pname;

SELECT *
FROM Departments
WHERE Dnum = (
    SELECT Dno FROM Employee
    WHERE SSN = (SELECT MIN(SSN) FROM Employee)
);

SELECT D.Dname, MAX(E.Salary) AS MaxSalary,
       MIN(E.Salary) AS MinSalary,
       AVG(E.Salary) AS AvgSalary
FROM Departments D
JOIN Employee E ON D.Dnum = E.Dno
GROUP BY D.Dname;

SELECT CONCAT(E.Fname, ' ', E.Lname) AS Manager_Name
FROM Employee E
JOIN Departments D ON E.SSN = D.MGRSSN
WHERE E.SSN NOT IN (SELECT Essn FROM Dependent);

SELECT D.Dnum, D.Dname, COUNT(E.SSN) AS NumEmployees
FROM Departments D
JOIN Employee E ON D.Dnum = E.Dno
GROUP BY D.Dnum, D.Dname
HAVING AVG(E.Salary) < (SELECT AVG(Salary) FROM Employee);

SELECT CONCAT(E.Fname, ' ', E.Lname) AS Employee_Name, P.Pname
FROM Employee E
JOIN Works_for W ON E.SSN = W.Essn
JOIN Project P ON W.Pno = P.Pnumber
ORDER BY E.Dno, E.Lname, E.Fname;

SELECT DISTINCT TOP 2 Salary
FROM Employee
ORDER BY Salary DESC;

SELECT DISTINCT CONCAT(E.Fname, ' ', E.Lname) AS Employee_Name
FROM Employee E
JOIN Dependent D ON E.Fname = D.Dependent_name
    OR E.Lname = D.Dependent_name;

INSERT INTO Departments (Dname, Dnum, MGRSSN, [MGRStart Date])
VALUES ('DEPT IT', 100, 112233, '2006-11-01');

UPDATE Departments
SET MGRSSN = 968574
WHERE Dnum = 100;

UPDATE Departments
SET MGRSSN = 102672
WHERE Dnum = 20;

UPDATE Employee
SET SuperSSN = 102672
WHERE SSN = 102660;

DELETE FROM Dependent
WHERE Essn = 223344;

UPDATE Departments
SET MGRSSN = NULL
WHERE MGRSSN = 223344;

UPDATE Employee
SET SuperSSN = NULL
WHERE SuperSSN = 223344;

DELETE FROM Works_for
WHERE Essn = 223344;

DELETE FROM Employee
WHERE SSN = 223344;

UPDATE Employee
SET Salary = Salary * 1.3
WHERE SSN IN (
    SELECT Essn
    FROM Works_for W
    JOIN Project P ON W.Pno = P.Pnumber
    WHERE P.Pname = 'Al Rabwah'
);