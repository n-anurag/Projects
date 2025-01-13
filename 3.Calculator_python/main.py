while True:
    try:
        a = float(input("Enter a number:"))
        b = float(input("enter another number:"))
        op = input("Operation(+,-,*,%) : ")

        # calculator

        if op == "+":
            print("Result :", a + b)
        elif op == "-":
            print("Result :", a - b)
        elif op == "*":
            print("Result :", a * b)
        elif op == "/":
            if b != 0:
                print("Result :", a / b)
            else:
                print("Error: undefined")
        else:
            print("invalid operation")
    except ValueError:
        print("invalid operation")
        wanna_continue = input("Wanna continue(y/n)")
        if wanna_continue == "n":
            print("Thank you")
            break
