from datetime import datetime
import math
import random


def merge(arr1, arr2):
    i = 0
    j = 0
    arr1_length = len(arr1)
    arr2_length = len(arr2)
    result_arr = []
    while i < arr1_length and j < arr2_length:
        if arr1[i] < arr2[j]:
            result_arr.append(arr1[i])
            i += 1
        else:
            result_arr.append(arr2[j])
            j += 1

    while i < arr1_length:
        result_arr.append(arr1[i])
        i += 1

    while j < arr1_length:
        result_arr.append(arr2[j])
        j += 1

    return result_arr


def merge_sort(numbers):
    length = len(numbers)

    if length > 1:
        middle = math.floor(length / 2)
        first_half = numbers[0:middle]
        second_half = numbers[middle:]
        return merge(first_half, second_half)
    else:
        return numbers


def bubble_sort(arr):
    t1 = datetime.now()
    for i, v1 in enumerate(arr):
        for j, v2 in enumerate(arr):
            if v1 < v2:
                # swapping ith and jth element
                # pythonic way
                [arr[i], arr[j]] = [arr[j], arr[i]]

    t2 = datetime.now()
    print("Bubble Sort [Time Taken] ", (t2 - t1).microseconds, " microseconds")
    return arr


size = 100_000  # let stry the two algorithms for 1 million size array
input = list(random.sample(range(-size, size), size))


print("Sorting array of size ", size)
bubble_sort(input)
t1 = datetime.now()
merge_sort(input)
t2 = datetime.now()
print("Merge Sort [Time Taken] ", (t2 - t1).microseconds, " microseconds")
