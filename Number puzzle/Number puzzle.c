#include <stdio.h>
#include <conio.h>
#include <time.h>
#include <dos.h>

#define HLINE for(a=0;a<40;a++)\
		printf("%c",196);

#define VLINE(X,Y) {\
			gotoxy(X,Y);\
			printf("%c",179);\
			}

#define SWAP(x,y,z) (z=x,x=y,y=z)

	static int puzzle[4][4];
	 clock_t start,end;

void random();
void intro();
void initiate();
void table();
void print_array();
void highscore(int moves);

void main()
{
	 static int i,j;
	 int ch,a,b,temp,count,increase,moves=0;
	 int compare[]={1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0};

	 float duration;
	 clrscr();

intro();  // Introduction function call

random(); //Randomize the numbers in the table

initiate(); //Print the table



			start=clock();   //Start counting the time in seconds
	i=3;j=3;count=0;increase=0;
	for(;;)
	{


		ch=getch();      //Wait for key input


		if(ch==77)      //If right arrow is pressed
			{
			if(j==0)
			continue;
			SWAP(puzzle[i][j],puzzle[i][j-1],temp);
			print_array();
			j--;
			moves++;
			}
		else if(ch==75)   // If left arrow is pressed
			{
			if(j==3)
			continue;
			SWAP(puzzle[i][j],puzzle[i][j+1],temp);
			print_array();
			j++;
			moves++;
			}
		else if(ch==80)   //If down arrow is pressed
			{
			if(i==0)
			continue;
			SWAP(puzzle[i][j],puzzle[i-1][j],temp);
			print_array();
			i--;moves++;

			}
		else if(ch==72)    //If up arrow is pressed
			{
			if(i==3)
			continue;
			SWAP(puzzle[i][j],puzzle[i+1][j],temp);
			print_array();
			i++; moves++;
			}
		else if(ch==98 || ch==66)    // If B is pressed
		exit(1);
		else			// If any other key is pressed
		continue;

	if(puzzle[0][0]==compare[increase])  //value of increase currently=0
	{	for(a=0;a<4;a++)
		{
			for(b=0;b<4;b++)
			{

				if(puzzle[a][b]==compare[increase])
				{
				count++;
				increase++;
				}
				else
				{
				count=0;increase=0;
				break;
				}
			}
		  if(count==0)
		  break;
		}
	}

	if(count==16)

	{
		end=clock();
	clrscr();gotoxy(10,5);
	printf("Congratulations! You finished in %d moves and %.2f seconds!\n\t Press any key to exit\n",moves,((end-start)/CLK_TCK));

	gotoxy(10,7);
	puzzle[3][3]=16;      // To replace last value with 16
	print_array();       //To print all values along with 16
	table();               //To draw the frame

	highscore(moves);
	getch();exit(1);
	}


   }




}
void random()	     // INSERT RANDOM VALUES IN TABLE
{
int c,d,array[15],random,count;

	srand(time(NULL));

	flag_array:
	array[0]=rand()%16;
	if(array[0]==0)
	goto flag_array;

	for(c=1;c<15;)
	{
		flagrandom:
		random=rand()%16;
		 if(random==0)
		 goto flagrandom;


		for(d=0;d<c;d++)
		{
			if(array[d]==random)
			break;
		}
		if(d==c)
		{
			array[c]=random;
			c++;
		}
	}
  count=0;
  for(c=0;c<4;c++)
  {
	for(d=0;d<4;d++)
	{
		puzzle[c][d]=array[count];
		count++;
	}
  }
  puzzle[3][3]=NULL;






}


void initiate()     //PRINT THE INITIAL VALUES IN THE ROW
{

	int a,b;
gotoxy(10,10);
		for(a=0;a<4;a++)
		{       printf("\r");
			for(b=0;b<4;b++)
				{
				if(puzzle[a][b]==0)
				printf("%10c",'\0');
				else
				printf("%10d",puzzle[a][b]);
				}
				printf("\n\n");
		}
	table();

	gotoxy(10,22);
		printf("\n\nPress B key to exit at any time");
}

void print_array() //TO PRINT THE TABLE AFTER VALUES ARE ALTERED
{
	int x,y,b,a;

	gotoxy(10,10);
		for(x=0;x<4;x++)
		{       printf("\r");
			for(y=0;y<4;y++)
				{
				if(puzzle[x][y]==0)
				printf("%10c",'\0');
				else
				printf("%10d",puzzle[x][y]);
				}
				printf("\n\n");
		}
		table();

}

void intro() // TO DISPLAY THE INTRODUCTION SCREEN
{
	printf("\n\n***Program still in development phase***\n\n");
		delay(1000);
	printf("Welcome to the 15 number puzzle!\n\n");
		delay(500);
	printf("The buttons used to switch pieces are:\n");
		puts("Up arrow, down arrow, right arrow and left arrow");
		delay(250);
	puts("\n\nMatch all the numbers in ascending order to win\n\n");
		delay(500);
	puts("\tPress any key to begin");

	getch();
	clrscr();
}


void table() // TO CREATE THE TABLE
{
	int a,b;

	/////// Horizontal bars /////////
	 for(b=9;b<18;b+=2)
	 {
		gotoxy(7,b);
		HLINE
	}

 ///////////// Vertical bars ////////////////////
					 for(b=7;b<=50;b+=10)
						 {
						for(a=9;a<18;a++)
						{
							VLINE(b,a);
						}
					 }
			//////////////////////////////////////////
}

void highscore(int moves)
{
	FILE *read_pointer,*write_pointer;
	int i=0,count,array[3],number_score=0,place_value;
	char score[3];


	read_pointer=fopen("c:\highscore.txt","r");
		if(read_pointer==NULL)
		{
			puts("Could not read score, press any key to exit");
		    //	exit(0);
		}

	for(;;)
	{
		score[i]=fgetc(read_pointer);
		if(score[i]==EOF)
			{
			score[i]=NULL;
			break;
			}
		i++;
	}

	count=strlen(score);
	for(i=0;i<count;i++)
	array[i]=score[i]-48;  //MAIN


	place_value=1;
	for(i=count-1;i>=0;i--)
		{
			number_score+=array[i]*place_value;
			place_value*=10;
		}

	write_pointer=fopen("c:\highscore.txt","w"); //Writing part
	if(write_pointer==NULL)
	{
		puts("Could not save your score, press any key to exit");
	     //	exit(0);
	}

	  if(moves<number_score)
	  {
		printf("\n\n\t\tCongratulations! You just made a new record in moves!\n");
			 fprintf(write_pointer,"%d",moves);
	  }
	  else
	  {
		fprintf(write_pointer,"%d",number_score);
	  }



	fclose(read_pointer);
	fclose(write_pointer);

}