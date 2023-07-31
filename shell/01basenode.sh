#! /bin/bash
echo "Hello World"

# 可以不加引号，但是有空格必须加
name="zhangsan"
age=14

echo ${name}
echo $name

# 只读变量
readonly name

# name="lisi"

# 删除变量
# 只读变量不能删除
# unset name
unset age

# 删除输出为空
echo $age 

# 变量的赋值
newName="$name 111"
# 单引号不会给变量转义
newName2='$name 222'
echo $newName
echo $newName2

# 获取变量的长度
echo ${#name}
echo ${#newName}

# 截取字符串，第一个数字为开始的索引，第二个数字为截取的字符床的长度
echo ${name:1:2}

# TODO 数组
# base 只支持一维数组，不支持多维数组，并且没有限定数组的大小

favs=("足球" "篮球" "乒乓球")
fav=${favs[1]}
favlength=${#favs[1]}
echo $fav
echo $favlength

# 特殊的多行注释，EOF可以使用任意字符串，包括符号!
:<<EOF
注释内容...
EOF