 .grid-1 {
display: grid;
width: calc(360px _ 3 + 16px);
height: calc(300px \* 6 + 16px);
grid-template-rows: repeat(6, 1fr);
grid-template-columns: repeat(3, 1fr);

.grid-1\_\_item-1 {
grid-column: 1/2;
grid-row: 1/3;
}

.grid-1\_\_item-2 {
grid-column: 2/4;
grid-row: 1/2;
}

.grid-1\_\_item-3 {
grid-column: 2/4;
grid-row: 2/3;
}

.grid-1\_\_item-4 {
grid-column: 1/3;
grid-row: 3/4;
}

.grid-1\_\_item-5 {
grid-column: 3/5;
grid-row: 3/5;
}

.grid-1\_\_item-6 {
grid-column: 1/3;
grid-row: 4/5;
}

.grid-1\_\_item-7 {
grid-column: 1/2;
grid-row: 5/7;
}

.grid-1\_\_item-8 {
grid-column: 2/4;
grid-row: 5/6;
}

.grid-1\_\_item-9 {
grid-column: 2/4;
grid-row: 6/7;
}
\*/