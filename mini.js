function menuChoice(choice){
    switch(choice){
        case 1:
            return "Start Game";
            break;
            case 2:
                return "Load Ganme";
                break;
                case 3:
                    return "Settings";
                    break;
                    case 4:
                        return "Exit";
                        default:
                            return "Invalid Choice";

}
}
console.log( menuChoice(1));
console.log( menuChoice(2));
console.log( menuChoice(3));
console.log( menuChoice(4));
console.log( menuChoice(5));

