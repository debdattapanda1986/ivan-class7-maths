const questionSets = {
  "A": [
    {
      "type": "mcq",
      "topic": "Integers",
      "question": "Which is the value of (-8) + 13?",
      "options": [
        "5",
        "-5",
        "21",
        "-21"
      ],
      "answer": 0,
      "marks": 1,
      "explanation": "Adding 13 to -8 gives 5."
    },
    {
      "type": "mcq",
      "topic": "Integers",
      "question": "Which integer is the additive inverse of -17?",
      "options": [
        "17",
        "-17",
        "0",
        "1"
      ],
      "answer": 0,
      "marks": 1,
      "explanation": "The additive inverse changes the sign."
    },
    {
      "type": "mcq",
      "topic": "Integers",
      "question": "What is (-6) × (-4)?",
      "options": [
        "-24",
        "24",
        "10",
        "-10"
      ],
      "answer": 1,
      "marks": 1,
      "explanation": "The product of two negative integers is positive."
    },
    {
      "type": "short",
      "topic": "Integers",
      "question": "Find: (-25) + 18 - (-7).",
      "options": null,
      "answer": "0",
      "marks": 2,
      "explanation": "-25 + 18 + 7 = 0."
    },
    {
      "type": "short",
      "topic": "Integers",
      "question": "A lift is at floor -3 and moves up 8 floors. Which floor does it reach?",
      "options": null,
      "answer": "5",
      "marks": 2,
      "explanation": "-3 + 8 = 5."
    },
    {
      "type": "mcq",
      "topic": "Fractions",
      "question": "Which fraction is equivalent to 3/5?",
      "options": [
        "6/15",
        "9/15",
        "12/25",
        "15/20"
      ],
      "answer": 1,
      "marks": 1,
      "explanation": "3/5 × 3/3 = 9/15."
    },
    {
      "type": "mcq",
      "topic": "Fractions",
      "question": "What is 2/3 + 1/6?",
      "options": [
        "1/2",
        "5/6",
        "2/9",
        "1"
      ],
      "answer": 1,
      "marks": 1,
      "explanation": "2/3 = 4/6, so the sum is 5/6."
    },
    {
      "type": "mcq",
      "topic": "Fractions",
      "question": "Which is greater?",
      "options": [
        "5/8",
        "3/4",
        "7/10",
        "2/3"
      ],
      "answer": 1,
      "marks": 1,
      "explanation": "3/4 = 0.75, which is greatest."
    },
    {
      "type": "short",
      "topic": "Fractions",
      "question": "Find 3/4 of 20.",
      "options": null,
      "answer": "15",
      "marks": 2,
      "explanation": "20 × 3/4 = 15."
    },
    {
      "type": "problem",
      "topic": "Fractions",
      "question": "Riya used 2/5 of a ribbon and then 1/4 of the original ribbon. What fraction of the ribbon remains?",
      "options": null,
      "answer": "7/20",
      "marks": 3,
      "explanation": "Used = 2/5 + 1/4 = 13/20; remaining = 7/20."
    },
    {
      "type": "mcq",
      "topic": "Decimals",
      "question": "What is 4.75 + 2.6?",
      "options": [
        "7.01",
        "7.35",
        "6.35",
        "7.25"
      ],
      "answer": 1,
      "marks": 1,
      "explanation": "4.75 + 2.60 = 7.35."
    },
    {
      "type": "mcq",
      "topic": "Decimals",
      "question": "Which is the smallest number?",
      "options": [
        "0.8",
        "0.08",
        "0.18",
        "0.808"
      ],
      "answer": 1,
      "marks": 1,
      "explanation": "0.08 is the smallest."
    },
    {
      "type": "short",
      "topic": "Decimals",
      "question": "Multiply 3.25 by 10.",
      "options": null,
      "answer": "32.5",
      "marks": 2,
      "explanation": "Multiplying by 10 shifts the decimal one place right."
    },
    {
      "type": "problem",
      "topic": "Decimals",
      "question": "A notebook costs ₹48.75. How much will 4 notebooks cost?",
      "options": null,
      "answer": "195",
      "marks": 3,
      "explanation": "48.75 × 4 = 195."
    },
    {
      "type": "mcq",
      "topic": "Rational Numbers",
      "question": "Which number is rational?",
      "options": [
        "√2",
        "π",
        "-7/9",
        "√5"
      ],
      "answer": 2,
      "marks": 1,
      "explanation": "A rational number can be expressed as p/q where q ≠ 0."
    },
    {
      "type": "mcq",
      "topic": "Rational Numbers",
      "question": "Which is the greater rational number?",
      "options": [
        "-2/3",
        "-3/4",
        "-5/6",
        "-7/8"
      ],
      "answer": 0,
      "marks": 1,
      "explanation": "Among negative numbers, the one closer to zero is greater."
    },
    {
      "type": "short",
      "topic": "Rational Numbers",
      "question": "Write the additive inverse of 11/13.",
      "options": null,
      "answer": "-11/13",
      "marks": 2,
      "explanation": "The additive inverse has the opposite sign."
    },
    {
      "type": "problem",
      "topic": "Rational Numbers",
      "question": "Find: 5/6 - (-1/3).",
      "options": null,
      "answer": "7/6",
      "marks": 3,
      "explanation": "5/6 + 1/3 = 5/6 + 2/6 = 7/6."
    },
    {
      "type": "mcq",
      "topic": "Powers and Exponents",
      "question": "What is 2^5?",
      "options": [
        "10",
        "16",
        "32",
        "64"
      ],
      "answer": 2,
      "marks": 1,
      "explanation": "2 × 2 × 2 × 2 × 2 = 32."
    },
    {
      "type": "mcq",
      "topic": "Powers and Exponents",
      "question": "In 7^3, what is the exponent?",
      "options": [
        "7",
        "3",
        "21",
        "10"
      ],
      "answer": 1,
      "marks": 1,
      "explanation": "The exponent is 3."
    },
    {
      "type": "short",
      "topic": "Powers and Exponents",
      "question": "Write 81 as a power of 3.",
      "options": null,
      "answer": "3^4",
      "marks": 2,
      "explanation": "3 × 3 × 3 × 3 = 81."
    },
    {
      "type": "problem",
      "topic": "Powers and Exponents",
      "question": "Simplify 2^3 × 2^4.",
      "options": null,
      "answer": "128",
      "marks": 3,
      "explanation": "2^(3+4) = 2^7 = 128."
    },
    {
      "type": "mcq",
      "topic": "Algebraic Expressions",
      "question": "Which is a like term of 7x?",
      "options": [
        "7y",
        "-3x",
        "3xy",
        "x^2"
      ],
      "answer": 1,
      "marks": 1,
      "explanation": "Like terms have the same variable part."
    },
    {
      "type": "mcq",
      "topic": "Algebraic Expressions",
      "question": "What is the coefficient of y in -9y + 4?",
      "options": [
        "4",
        "9",
        "-9",
        "-4"
      ],
      "answer": 2,
      "marks": 1,
      "explanation": "The coefficient of y is -9."
    },
    {
      "type": "short",
      "topic": "Algebraic Expressions",
      "question": "Simplify: 5a + 3a - 2.",
      "options": null,
      "answer": "8a - 2",
      "marks": 2,
      "explanation": "Combine the like terms 5a and 3a."
    },
    {
      "type": "problem",
      "topic": "Algebraic Expressions",
      "question": "If x = 4, find the value of 3x + 7.",
      "options": null,
      "answer": "19",
      "marks": 3,
      "explanation": "3(4) + 7 = 19."
    },
    {
      "type": "mcq",
      "topic": "Simple Linear Equations",
      "question": "Solve: x + 9 = 15.",
      "options": [
        "6",
        "24",
        "-6",
        "9"
      ],
      "answer": 0,
      "marks": 1,
      "explanation": "Subtract 9 from both sides."
    },
    {
      "type": "mcq",
      "topic": "Simple Linear Equations",
      "question": "Solve: 5x = 35.",
      "options": [
        "5",
        "6",
        "7",
        "8"
      ],
      "answer": 2,
      "marks": 1,
      "explanation": "35 ÷ 5 = 7."
    },
    {
      "type": "problem",
      "topic": "Simple Linear Equations",
      "question": "A number increased by 12 is 29. Form an equation and find the number.",
      "options": null,
      "answer": "17",
      "marks": 4,
      "explanation": "Let the number be x. x + 12 = 29, so x = 17."
    },
    {
      "type": "problem",
      "topic": "Simple Linear Equations",
      "question": "Three times a number minus 5 is 19. Find the number.",
      "options": null,
      "answer": "8",
      "marks": 2,
      "explanation": "3x - 5 = 19, so 3x = 24 and x = 8."
    },
    {
      "type": "mcq",
      "topic": "Symmetry",
      "question": "A figure that can be divided into two matching halves has a:",
      "options": [
        "line of symmetry",
        "number line",
        "bar graph",
        "scale"
      ],
      "answer": 0,
      "marks": 1,
      "explanation": "A line of symmetry divides a figure into matching halves."
    },
    {
      "type": "mcq",
      "topic": "Symmetry",
      "question": "How many lines of symmetry does a square have?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "answer": 3,
      "marks": 1,
      "explanation": "A square has four lines of symmetry."
    },
    {
      "type": "short",
      "topic": "Symmetry",
      "question": "Does a scalene triangle have a line of symmetry?",
      "options": null,
      "answer": "No",
      "marks": 2,
      "explanation": "A scalene triangle has no equal sides or angles, so it has no line of symmetry."
    },
    {
      "type": "mcq",
      "topic": "Collecting/Organizing Data",
      "question": "Which graph is best for comparing the number of students choosing different sports?",
      "options": [
        "Bar graph",
        "Line graph only",
        "Circle only",
        "Number line"
      ],
      "answer": 0,
      "marks": 1,
      "explanation": "Bar graphs are useful for comparing categories."
    },
    {
      "type": "short",
      "topic": "Collecting/Organizing Data",
      "question": "Find the mean of 4, 6, 8, 10.",
      "options": null,
      "answer": "7",
      "marks": 2,
      "explanation": "Mean = (4+6+8+10)/4 = 7."
    },
    {
      "type": "problem",
      "topic": "Collecting/Organizing Data",
      "question": "The numbers of books read by five students are 2, 5, 3, 4 and 6. Find the mean and range.",
      "options": null,
      "answer": "Mean = 4; Range = 4",
      "marks": 2,
      "explanation": "Mean = 20/5 = 4. Range = 6 - 2 = 4."
    }
  ],
  "B": [
    {
      "type": "mcq",
      "topic": "Integers",
      "question": "What is (-15) - 7?",
      "options": [
        "-8",
        "8",
        "-22",
        "22"
      ],
      "answer": 2,
      "marks": 1,
      "explanation": "Subtracting 7 from -15 gives -22."
    },
    {
      "type": "mcq",
      "topic": "Integers",
      "question": "Which statement is true?",
      "options": [
        "-4 > -2",
        "-7 < -3",
        "0 < -5",
        "6 < -1"
      ],
      "answer": 1,
      "marks": 1,
      "explanation": "-7 lies to the left of -3 on the number line."
    },
    {
      "type": "mcq",
      "topic": "Integers",
      "question": "What is 9 × (-5)?",
      "options": [
        "45",
        "-45",
        "14",
        "-14"
      ],
      "answer": 1,
      "marks": 1,
      "explanation": "A positive integer multiplied by a negative integer gives a negative product."
    },
    {
      "type": "short",
      "topic": "Integers",
      "question": "Find: 18 - (-12) + (-5).",
      "options": null,
      "answer": "25",
      "marks": 2,
      "explanation": "18 + 12 - 5 = 25."
    },
    {
      "type": "short",
      "topic": "Integers",
      "question": "The temperature is -4°C and rises by 11°C. What is the new temperature?",
      "options": null,
      "answer": "7°C",
      "marks": 2,
      "explanation": "-4 + 11 = 7."
    },
    {
      "type": "mcq",
      "topic": "Fractions",
      "question": "What is 5/6 - 1/3?",
      "options": [
        "1/2",
        "2/3",
        "1/3",
        "5/3"
      ],
      "answer": 0,
      "marks": 1,
      "explanation": "1/3 = 2/6, so the difference is 3/6 = 1/2."
    },
    {
      "type": "mcq",
      "topic": "Fractions",
      "question": "What is the reciprocal of 7/9?",
      "options": [
        "7/9",
        "-7/9",
        "9/7",
        "1/7"
      ],
      "answer": 2,
      "marks": 1,
      "explanation": "The reciprocal is obtained by interchanging numerator and denominator."
    },
    {
      "type": "mcq",
      "topic": "Fractions",
      "question": "Which fraction is in simplest form?",
      "options": [
        "6/12",
        "9/15",
        "7/11",
        "12/18"
      ],
      "answer": 2,
      "marks": 1,
      "explanation": "7 and 11 have no common factor other than 1."
    },
    {
      "type": "short",
      "topic": "Fractions",
      "question": "Find 5/8 × 16.",
      "options": null,
      "answer": "10",
      "marks": 2,
      "explanation": "16 × 5/8 = 10."
    },
    {
      "type": "problem",
      "topic": "Fractions",
      "question": "A tank is 3/5 full. If 1/10 of the tank is used, what fraction remains?",
      "options": null,
      "answer": "1/2",
      "marks": 3,
      "explanation": "3/5 - 1/10 = 6/10 - 1/10 = 1/2."
    },
    {
      "type": "mcq",
      "topic": "Decimals",
      "question": "What is 7.2 ÷ 10?",
      "options": [
        "72",
        "0.72",
        "7.02",
        "0.072"
      ],
      "answer": 1,
      "marks": 1,
      "explanation": "Dividing by 10 shifts the decimal one place left."
    },
    {
      "type": "mcq",
      "topic": "Decimals",
      "question": "Which is equal to 3.40?",
      "options": [
        "3.04",
        "3.4",
        "34",
        "0.34"
      ],
      "answer": 1,
      "marks": 1,
      "explanation": "Trailing zeros after the decimal do not change the value."
    },
    {
      "type": "short",
      "topic": "Decimals",
      "question": "Subtract 5.75 from 12.3.",
      "options": null,
      "answer": "6.55",
      "marks": 2,
      "explanation": "12.30 - 5.75 = 6.55."
    },
    {
      "type": "problem",
      "topic": "Decimals",
      "question": "A runner completes 2.75 km in the morning and 3.6 km in the evening. Find the total distance.",
      "options": null,
      "answer": "6.35 km",
      "marks": 3,
      "explanation": "2.75 + 3.60 = 6.35 km."
    },
    {
      "type": "mcq",
      "topic": "Rational Numbers",
      "question": "Which rational number lies between -1 and 0?",
      "options": [
        "-5/4",
        "-3/4",
        "2",
        "4/3"
      ],
      "answer": 1,
      "marks": 1,
      "explanation": "-3/4 is between -1 and 0."
    },
    {
      "type": "mcq",
      "topic": "Rational Numbers",
      "question": "What is (-2/5) × 15?",
      "options": [
        "-6",
        "6",
        "-3",
        "3"
      ],
      "answer": 0,
      "marks": 1,
      "explanation": "(-2/5) × 15 = -6."
    },
    {
      "type": "short",
      "topic": "Rational Numbers",
      "question": "Find the multiplicative inverse of -4/7.",
      "options": null,
      "answer": "-7/4",
      "marks": 2,
      "explanation": "The reciprocal of -4/7 is -7/4."
    },
    {
      "type": "problem",
      "topic": "Rational Numbers",
      "question": "Find: (-3/4) + 5/8.",
      "options": null,
      "answer": "-1/8",
      "marks": 3,
      "explanation": "-3/4 = -6/8; -6/8 + 5/8 = -1/8."
    },
    {
      "type": "mcq",
      "topic": "Powers and Exponents",
      "question": "What is 10^4?",
      "options": [
        "40",
        "100",
        "1000",
        "10000"
      ],
      "answer": 3,
      "marks": 1,
      "explanation": "10^4 = 10 × 10 × 10 × 10 = 10000."
    },
    {
      "type": "mcq",
      "topic": "Powers and Exponents",
      "question": "Which is equal to 5 × 5 × 5?",
      "options": [
        "5^2",
        "5^3",
        "3^5",
        "15"
      ],
      "answer": 1,
      "marks": 1,
      "explanation": "There are three factors of 5."
    },
    {
      "type": "short",
      "topic": "Powers and Exponents",
      "question": "Evaluate 3^2 + 2^3.",
      "options": null,
      "answer": "17",
      "marks": 2,
      "explanation": "9 + 8 = 17."
    },
    {
      "type": "problem",
      "topic": "Powers and Exponents",
      "question": "Express 64 × 8 using powers of 2 and find its value.",
      "options": null,
      "answer": "2^9 = 512",
      "marks": 3,
      "explanation": "64 = 2^6 and 8 = 2^3, so product = 2^9 = 512."
    },
    {
      "type": "mcq",
      "topic": "Algebraic Expressions",
      "question": "Which pair contains like terms?",
      "options": [
        "3a and 3b",
        "5x and -2x",
        "4m and 4m^2",
        "p and pq"
      ],
      "answer": 1,
      "marks": 1,
      "explanation": "Both terms have x to the first power."
    },
    {
      "type": "mcq",
      "topic": "Algebraic Expressions",
      "question": "Simplify 9p - 4p.",
      "options": [
        "13p",
        "5p",
        "-5p",
        "36p"
      ],
      "answer": 1,
      "marks": 1,
      "explanation": "9p - 4p = 5p."
    },
    {
      "type": "short",
      "topic": "Algebraic Expressions",
      "question": "Write an expression for '7 more than n'.",
      "options": null,
      "answer": "n + 7",
      "marks": 2,
      "explanation": "Seven more than n means n + 7."
    },
    {
      "type": "problem",
      "topic": "Algebraic Expressions",
      "question": "The length of a rectangle is (x + 3) cm and breadth is x cm. Write its perimeter expression and find it for x = 5.",
      "options": null,
      "answer": "4x + 6; 26 cm",
      "marks": 3,
      "explanation": "Perimeter = 2[(x+3)+x] = 4x+6; at x=5, 26 cm."
    },
    {
      "type": "mcq",
      "topic": "Simple Linear Equations",
      "question": "Solve: x - 6 = 10.",
      "options": [
        "4",
        "16",
        "-16",
        "-4"
      ],
      "answer": 1,
      "marks": 1,
      "explanation": "Add 6 to both sides."
    },
    {
      "type": "mcq",
      "topic": "Simple Linear Equations",
      "question": "Solve: 2x + 3 = 13.",
      "options": [
        "4",
        "5",
        "6",
        "8"
      ],
      "answer": 1,
      "marks": 1,
      "explanation": "2x = 10, so x = 5."
    },
    {
      "type": "problem",
      "topic": "Simple Linear Equations",
      "question": "A number divided by 4 is 6. Find the number.",
      "options": null,
      "answer": "24",
      "marks": 4,
      "explanation": "x/4 = 6, so x = 24."
    },
    {
      "type": "problem",
      "topic": "Simple Linear Equations",
      "question": "The sum of a number and twice the number is 36. Find the number.",
      "options": null,
      "answer": "12",
      "marks": 2,
      "explanation": "x + 2x = 36, so 3x = 36 and x = 12."
    },
    {
      "type": "mcq",
      "topic": "Symmetry",
      "question": "Which capital letter has a vertical line of symmetry?",
      "options": [
        "F",
        "G",
        "H",
        "J"
      ],
      "answer": 2,
      "marks": 1,
      "explanation": "H has vertical symmetry in standard block form."
    },
    {
      "type": "mcq",
      "topic": "Symmetry",
      "question": "An equilateral triangle has how many lines of symmetry?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "answer": 2,
      "marks": 1,
      "explanation": "Each median is also a line of symmetry."
    },
    {
      "type": "short",
      "topic": "Symmetry",
      "question": "What is the order of rotational symmetry of a square?",
      "options": null,
      "answer": "4",
      "marks": 2,
      "explanation": "A square matches itself four times in one full turn."
    },
    {
      "type": "mcq",
      "topic": "Collecting/Organizing Data",
      "question": "The number occurring most often in a data set is called the:",
      "options": [
        "mean",
        "median",
        "mode",
        "range"
      ],
      "answer": 2,
      "marks": 1,
      "explanation": "Mode is the most frequently occurring value."
    },
    {
      "type": "short",
      "topic": "Collecting/Organizing Data",
      "question": "Find the median of 3, 7, 5, 9, 1.",
      "options": null,
      "answer": "5",
      "marks": 2,
      "explanation": "Ordered data: 1,3,5,7,9; middle value is 5."
    },
    {
      "type": "problem",
      "topic": "Collecting/Organizing Data",
      "question": "A class recorded daily steps: 4000, 5000, 5000, 6000, 7000. Find the mode and range.",
      "options": null,
      "answer": "Mode = 5000; Range = 3000",
      "marks": 2,
      "explanation": "5000 occurs most often; range = 7000 - 4000 = 3000."
    }
  ],
  "C": [
    {
      "type": "mcq",
      "topic": "Integers",
      "question": "What is (-9) + (-6)?",
      "options": [
        "15",
        "-15",
        "3",
        "-3"
      ],
      "answer": 1,
      "marks": 1,
      "explanation": "Adding two negative integers gives -15."
    },
    {
      "type": "mcq",
      "topic": "Integers",
      "question": "What is (-7) × 8?",
      "options": [
        "56",
        "-56",
        "15",
        "-15"
      ],
      "answer": 1,
      "marks": 1,
      "explanation": "A negative times a positive is negative."
    },
    {
      "type": "mcq",
      "topic": "Integers",
      "question": "Which is the greatest?",
      "options": [
        "-10",
        "-2",
        "-7",
        "-5"
      ],
      "answer": 1,
      "marks": 1,
      "explanation": "-2 is closest to zero and therefore greatest."
    },
    {
      "type": "short",
      "topic": "Integers",
      "question": "Find: (-36) ÷ 6 + 4.",
      "options": null,
      "answer": "-2",
      "marks": 2,
      "explanation": "-36 ÷ 6 = -6; -6 + 4 = -2."
    },
    {
      "type": "short",
      "topic": "Integers",
      "question": "A submarine is at -25 m and rises 9 m. What is its new position?",
      "options": null,
      "answer": "-16 m",
      "marks": 2,
      "explanation": "-25 + 9 = -16."
    },
    {
      "type": "mcq",
      "topic": "Fractions",
      "question": "What is 1/2 + 3/8?",
      "options": [
        "4/10",
        "7/8",
        "5/8",
        "1"
      ],
      "answer": 1,
      "marks": 1,
      "explanation": "1/2 = 4/8; sum = 7/8."
    },
    {
      "type": "mcq",
      "topic": "Fractions",
      "question": "What is 7/9 ÷ 7/3?",
      "options": [
        "1/3",
        "3/9",
        "7/27",
        "1"
      ],
      "answer": 0,
      "marks": 1,
      "explanation": "7/9 × 3/7 = 1/3."
    },
    {
      "type": "mcq",
      "topic": "Fractions",
      "question": "Which is equal to 2 1/4?",
      "options": [
        "7/4",
        "8/4",
        "9/4",
        "10/4"
      ],
      "answer": 2,
      "marks": 1,
      "explanation": "2 1/4 = 9/4."
    },
    {
      "type": "short",
      "topic": "Fractions",
      "question": "Find 2 1/2 - 3/4.",
      "options": null,
      "answer": "7/4",
      "marks": 2,
      "explanation": "5/2 - 3/4 = 10/4 - 3/4 = 7/4."
    },
    {
      "type": "problem",
      "topic": "Fractions",
      "question": "A 12 m rope is cut so that 5/12 of it is used. How much rope is left?",
      "options": null,
      "answer": "7 m",
      "marks": 3,
      "explanation": "Used = 12 × 5/12 = 5 m; left = 7 m."
    },
    {
      "type": "mcq",
      "topic": "Decimals",
      "question": "What is 0.6 × 0.5?",
      "options": [
        "0.03",
        "0.3",
        "3",
        "0.11"
      ],
      "answer": 1,
      "marks": 1,
      "explanation": "6/10 × 5/10 = 30/100 = 0.3."
    },
    {
      "type": "mcq",
      "topic": "Decimals",
      "question": "What is 9.45 - 3.2?",
      "options": [
        "6.25",
        "6.35",
        "6.15",
        "5.25"
      ],
      "answer": 0,
      "marks": 1,
      "explanation": "9.45 - 3.20 = 6.25."
    },
    {
      "type": "short",
      "topic": "Decimals",
      "question": "Divide 7.5 by 5.",
      "options": null,
      "answer": "1.5",
      "marks": 2,
      "explanation": "7.5 ÷ 5 = 1.5."
    },
    {
      "type": "problem",
      "topic": "Decimals",
      "question": "A shopkeeper has 25.5 kg of rice and packs it equally into 6 bags. How much rice is in each bag?",
      "options": null,
      "answer": "4.25 kg",
      "marks": 3,
      "explanation": "25.5 ÷ 6 = 4.25 kg."
    },
    {
      "type": "mcq",
      "topic": "Rational Numbers",
      "question": "Which is the smaller number?",
      "options": [
        "-1/2",
        "-3/5",
        "1/3",
        "0"
      ],
      "answer": 1,
      "marks": 1,
      "explanation": "-3/5 = -0.6, which is smaller than -0.5."
    },
    {
      "type": "mcq",
      "topic": "Rational Numbers",
      "question": "What is 2/3 + (-1/6)?",
      "options": [
        "1/2",
        "5/6",
        "1/6",
        "-1/2"
      ],
      "answer": 0,
      "marks": 1,
      "explanation": "4/6 - 1/6 = 3/6 = 1/2."
    },
    {
      "type": "short",
      "topic": "Rational Numbers",
      "question": "Write 0 as a rational number.",
      "options": null,
      "answer": "0/1",
      "marks": 2,
      "explanation": "0 can be written as 0/q for any non-zero q."
    },
    {
      "type": "problem",
      "topic": "Rational Numbers",
      "question": "Find: (-5/6) ÷ (10/9).",
      "options": null,
      "answer": "-3/4",
      "marks": 3,
      "explanation": "(-5/6) × (9/10) = -45/60 = -3/4."
    },
    {
      "type": "mcq",
      "topic": "Powers and Exponents",
      "question": "Which is the expanded form of 4^3?",
      "options": [
        "4+4+4",
        "4×4×4",
        "3×3×3×3",
        "12"
      ],
      "answer": 1,
      "marks": 1,
      "explanation": "The exponent 3 means three factors of 4."
    },
    {
      "type": "mcq",
      "topic": "Powers and Exponents",
      "question": "What is 6^2?",
      "options": [
        "12",
        "18",
        "36",
        "64"
      ],
      "answer": 2,
      "marks": 1,
      "explanation": "6 × 6 = 36."
    },
    {
      "type": "short",
      "topic": "Powers and Exponents",
      "question": "Evaluate 5^2 - 3^2.",
      "options": null,
      "answer": "16",
      "marks": 2,
      "explanation": "25 - 9 = 16."
    },
    {
      "type": "problem",
      "topic": "Powers and Exponents",
      "question": "A bacteria count doubles each hour. If it starts at 2, how many are there after 5 doublings?",
      "options": null,
      "answer": "64",
      "marks": 3,
      "explanation": "2 × 2^5 = 64."
    },
    {
      "type": "mcq",
      "topic": "Algebraic Expressions",
      "question": "What is the constant term in 4x + 9?",
      "options": [
        "4",
        "x",
        "9",
        "4x"
      ],
      "answer": 2,
      "marks": 1,
      "explanation": "The term without a variable is the constant."
    },
    {
      "type": "mcq",
      "topic": "Algebraic Expressions",
      "question": "Simplify 6b + 2 - 3b.",
      "options": [
        "9b+2",
        "3b+2",
        "3b-2",
        "6b-1"
      ],
      "answer": 1,
      "marks": 1,
      "explanation": "6b - 3b = 3b."
    },
    {
      "type": "short",
      "topic": "Algebraic Expressions",
      "question": "Find the value of 2m - 5 when m = 9.",
      "options": null,
      "answer": "13",
      "marks": 2,
      "explanation": "18 - 5 = 13."
    },
    {
      "type": "problem",
      "topic": "Algebraic Expressions",
      "question": "A square has side (x + 2) cm. Write its perimeter and find it for x = 6.",
      "options": null,
      "answer": "4x + 8; 32 cm",
      "marks": 3,
      "explanation": "Perimeter = 4(x+2) = 4x+8; at x=6, 32 cm."
    },
    {
      "type": "mcq",
      "topic": "Simple Linear Equations",
      "question": "Solve: x + 14 = 22.",
      "options": [
        "6",
        "8",
        "36",
        "-8"
      ],
      "answer": 1,
      "marks": 1,
      "explanation": "22 - 14 = 8."
    },
    {
      "type": "mcq",
      "topic": "Simple Linear Equations",
      "question": "Solve: 4x = 28.",
      "options": [
        "6",
        "7",
        "8",
        "9"
      ],
      "answer": 1,
      "marks": 1,
      "explanation": "28 ÷ 4 = 7."
    },
    {
      "type": "problem",
      "topic": "Simple Linear Equations",
      "question": "A number decreased by 9 is 16. Find the number.",
      "options": null,
      "answer": "25",
      "marks": 4,
      "explanation": "x - 9 = 16, so x = 25."
    },
    {
      "type": "problem",
      "topic": "Simple Linear Equations",
      "question": "Five more than twice a number is 31. Find the number.",
      "options": null,
      "answer": "13",
      "marks": 2,
      "explanation": "2x + 5 = 31, so x = 13."
    },
    {
      "type": "mcq",
      "topic": "Symmetry",
      "question": "How many lines of symmetry does a rectangle that is not a square have?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "answer": 1,
      "marks": 1,
      "explanation": "It has one horizontal and one vertical line of symmetry."
    },
    {
      "type": "mcq",
      "topic": "Symmetry",
      "question": "Which shape has infinitely many lines of symmetry?",
      "options": [
        "Square",
        "Circle",
        "Rectangle",
        "Equilateral triangle"
      ],
      "answer": 1,
      "marks": 1,
      "explanation": "Every diameter of a circle is a line of symmetry."
    },
    {
      "type": "short",
      "topic": "Symmetry",
      "question": "Does the letter X have line symmetry?",
      "options": null,
      "answer": "Yes",
      "marks": 2,
      "explanation": "X has both vertical and horizontal line symmetry in standard block form."
    },
    {
      "type": "mcq",
      "topic": "Collecting/Organizing Data",
      "question": "Which measure gives the difference between the largest and smallest observations?",
      "options": [
        "Mean",
        "Mode",
        "Range",
        "Median"
      ],
      "answer": 2,
      "marks": 1,
      "explanation": "Range = largest value - smallest value."
    },
    {
      "type": "short",
      "topic": "Collecting/Organizing Data",
      "question": "Find the mean of 5, 5, 7, 9.",
      "options": null,
      "answer": "6.5",
      "marks": 2,
      "explanation": "Sum = 26; 26/4 = 6.5."
    },
    {
      "type": "problem",
      "topic": "Collecting/Organizing Data",
      "question": "The marks of five students are 12, 15, 18, 15 and 20. Find the mean, mode and range.",
      "options": null,
      "answer": "Mean = 16; Mode = 15; Range = 8",
      "marks": 2,
      "explanation": "Sum = 80, mean = 16; 15 occurs most often; range = 20 - 12 = 8."
    }
  ]
};
