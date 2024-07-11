
#!/bin/bash

# Проверяем, что переданы два аргумента
if [ "$#" -ne 2 ]; then
  echo "Usage: $0 <old_value> <new_value>"
  exit 1
fi

OLD_VALUE="$1"
NEW_VALUE="$2"

# Поиск файлов, содержащих старое значение
FILES=$(rg -l -F "$OLD_VALUE")

# Проверяем, что нашлись файлы для замены
if [ -z "$FILES" ]; then
  echo "No files found containing the string: $OLD_VALUE"
  exit 0
fi

# Проходим по каждому файлу
for FILE in $FILES; do
  # Выводим строки, содержащие старое значение и запрашиваем подтверждение
  echo "File: $FILE"
  rg -F "$OLD_VALUE" "$FILE"
  echo "Replace '$OLD_VALUE' with '$NEW_VALUE' in $FILE? (y/n)"
  read -r response
  if [[ "$response" == "y" || "$response" == "Y" ]]; then
    # Используем sed для замены с экранированием специальных символов
    sed -i.bak "s|$OLD_VALUE|$NEW_VALUE|g" "$FILE"
    if [ $? -eq 0 ]; then
      rm "${FILE}.bak"
      echo "Replaced in $FILE"
    else
      echo "Failed to replace in $FILE"
    fi
  else
    echo "Skipped $FILE"
  fi
done

