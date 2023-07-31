# 条件语句
num1=100
num2=200
if [ $num1 == $num2]
then
    echo "相等"
else
    echo "不相等"
fi
echo '输入1到4之间的数字:'
echo "你输入的数字为:"
read num
case $num in
    1) 
        echo "你选择了1"
    ;;
    2) 
        echo "你选择了2"
    ;;
    3) 
        echo "你选择了3"
    ;;
    4) 
        echo "你选择了4"
    ;;
    *) 
        echo "你没有输入1到4之间的数字"
    ;;
esac

# 循环语句
# for循环
for loop in 1 2 3 4 5
do
    echo "The value is: $loop"
done
for str in "This i a string" "hello world"
do 
    echo $str
done
# while循环
i=1
while (( $i <= 5))
do
    echo $i
    let "i++"
done
# break跳出循环
# continue跳出本次循环