#include<stdio.h>
int main()
{
   int n,i,count=0;
   printf("enter size of array: ");
   scanf("%d",&n);
   int a[n];
   for(i=0;i<n;i++)
   {
      printf("enter %d elements: ",i+1);
      scanf("%d",&a[i]);
      if(a[i]%2==0)        // for odd =  if( a[i]%2==1 )
      {
       count++;
      }
   }
   printf("total even elements: %d\n",count);
   return 0;
}
