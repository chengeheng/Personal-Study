# 函数
demoFunc(){
    echo "这是我的第一个shell函数"
}
echo "----函数开始执行----"
demoFunc
echo "----函数结束执行----"
## 函数返回值
funcWithReturn(){
    echo "这个函数会对输入的两个数字进行相加运算"
    echo "输入第一个数字："
    read num1
    echo "输入第二个数字："
    read num2
    echo "两个数字分别为 $num1 和 $num2 ！"
    return $(( $num1 + $num2 ))
}
funcWithReturn
# 函数返回值在调用函数后通过 $? 来获得
echo "输入的两个数字之和为 $? !"
## 函数参数
funcWithParam(){
    echo "第一个参数为 $1 "
    echo "第二个参数为 $2 "
    echo "两个数字分别为 $num1 和 $num2 ！"
    return $(( $1 + $2 ))
}
funcWithParam 1 2
echo "函数的输出结果是 $? "