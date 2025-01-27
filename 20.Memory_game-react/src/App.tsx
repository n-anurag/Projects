import  { useEffect, useState } from "react";
import './App.css';

import './cards.ts'

export default function MemoryGame() {
    const [cards, setCards] = useState<Card[]>(generateGrid());
    const [isLock, setIsLock] = useState<boolean>(false);
    const [flippedCard, setFlippedCard] = useState<number[]>([]);

    const handleClick = (index: number): void => {
        if (isLock || cards[index].isFlipped) {
            return; // Prevent clicking if locked or already flipped
        }

        const copyCards = [...cards];
        copyCards[index].isFlipped = true;
        setCards(copyCards);

        // Add the flipped card index to the flippedCard array
        setFlippedCard((prev) => [...prev, index]);
    };

    useEffect(() => {
        if (flippedCard.length === 2) {
            setIsLock(true);

            setTimeout(() => {
                const [firstIndex, secondIndex] = flippedCard;

                if (cards[firstIndex].Number !== cards[secondIndex].Number) {
                    // If the cards don't match, flip them back
                    const copyCards = [...cards];
                    copyCards[firstIndex].isFlipped = false;
                    copyCards[secondIndex].isFlipped = false;
                    setCards(copyCards);
                }

                // Reset the flipped cards and unlock
                setFlippedCard([]);
                setIsLock(false);
            }, 1000); // 1 second delay
        }
    }, [flippedCard, cards]);

    return (
        <div className="grid-container">
            {cards.map(({ id, Number, isFlipped }, index) => (
                <div
                    key={id}
                    className={`card ${isFlipped ? "flipped" : ""}`}
                    onClick={() => handleClick(index)}
                >
                    {isFlipped ? Number : "?"}
                </div>
            ))}
        </div>
    );
}

// Generate the grid with typed cards
function generateGrid(): Card[] {
    const Arr: number[] = Array.from({ length: 18 }, (_, index) => index + 1);

    // Spread operator to duplicate and shuffle the array
    const grid: number[] = [...Arr, ...Arr].sort(() => Math.random() - 0.5);

    // Map over the grid to create card objects
    const cards: Card[] = grid.map((item, index) => {
        return { id: index, Number: item, isFlipped: false };
    });

    return cards; // Ensure cards are returned
}
