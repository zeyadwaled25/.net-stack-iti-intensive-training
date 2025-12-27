USE Company_SD;
GO

SELECT D.Dnum AS Department_ID, D.Dname AS Department_Name,
       CONCAT(E.Fname, ' ', E.Lname) AS Manager_Name
FROM Departments D
JOIN Employee E ON D.MGRSSN = E.SSN;

SELECT D.Dname AS Department_Name, P.Pname AS Project_Name
FROM Departments D
JOIN Project P ON D.Dnum = P.Dnum;

SELECT CONCAT(E.Fname, ' ', E.Lname) AS Employee_Name, Dep.*
FROM Dependent Dep
JOIN Employee E ON Dep.Essn = E.SSN;

SELECT Pnumber, Pname, Plocation
FROM Project
WHERE Plocation IN ('Cairo', 'Alex');

SELECT *
FROM Project
WHERE Pname LIKE 'A%';

SELECT *
FROM Employee
WHERE Dno = 30 AND Salary BETWEEN 1000 AND 2000;

SELECT CONCAT(E.Fname, ' ', E.Lname) AS Employee_Name
FROM Employee E
JOIN Works_for W ON E.SSN = W.Essn
JOIN Project P ON W.Pno = P.Pnumber
WHERE E.Dno = 10
  AND P.Pname = 'AL Rabwah'
  AND W.Hours >= 10;

SELECT CONCAT(E.Fname, ' ', E.Lname) AS Employee_Name
FROM Employee E
JOIN Employee S ON E.SuperSSN = S.SSN
WHERE S.Fname = 'Kamel' AND S.Lname = 'Mohamed';

SELECT CONCAT(E.Fname, ' ', E.Lname) AS Employee_Name,
       P.Pname AS Project_Name
FROM Employee E
JOIN Works_for W ON E.SSN = W.Essn
JOIN Project P ON W.Pno = P.Pnumber
ORDER BY P.Pname;

SELECT P.Pnumber, D.Dname, M.Lname, M.Address, M.Bdate
FROM Project P
JOIN Departments D ON P.Dnum = D.Dnum
JOIN Employee M ON D.MGRSSN = M.SSN
WHERE P.Plocation = 'Cairo';

SELECT *
FROM Employee
WHERE SSN IN (SELECT MGRSSN FROM Departments);

SELECT E.*, Dep.Dependent_name, Dep.Sex, Dep.Bdate
FROM Employee E
LEFT JOIN Dependent Dep ON E.SSN = Dep.Essn;

INSERT INTO Employee (SSN, Fname, Lname, Dno, SuperSSN, Salary)
VALUES (102672, 'Zeyad', 'Waled', 30, 112233, 3000);

INSERT INTO Employee (SSN, Fname, Lname, Dno)
VALUES (102660, 'Ahmed', 'Alaa', 30);

UPDATE Employee
SET Salary = Salary * 1.2
WHERE SSN = 102672;