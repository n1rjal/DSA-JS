import math
import random

def mergeSort(array):
    length= len(array)
    if (length < 2  ):
        return array
    else:
        middle = math.floor(length/2)
        first_half= mergeSort(array[0:middle])
        second_half = mergeSort(array[middle:])
        return merge(first_half,second_half)


def merge(a,b):
    i=0
    j=0
    result = []
    while ( i<len(a) and j<len(b)):
        if (a[i]<b[j]):
            result.append(a[i])
            i+=1
        else:
            result.append(b[j])
            j+=1

    while ( i<len(a)):
        result.append(a[i])
        i+=1

    while (j<len(b)):
        result.append(b[j])
        j+=1
    return result

a = [1,2,3,5,4,8,7,-2,-15,-100]
print(len(a))
print(mergeSort(a))