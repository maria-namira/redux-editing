[![Build status](https://ci.appveyor.com/api/projects/status/hv9vpbya33qloqgs/branch/master?svg=true)](https://ci.appveyor.com/project/maria-namira/redux-editing/branch/master)

# Редактирование

### Deployment:  <a href="https://maria-namira.github.io/redux-editing/">Github Pages</a>

---

Данный проект не предполагает взаимодействия по протоколу HTTP и наличия серверной части.

Взяв за основу проект, рассмотренный на лекции, доработайте его следующим образом (либо напишите с нуля):

1. По умолчанию показывается форма добавления (при заполнении и нажатии на кнопку Save) происходит добавление элемента в список:

![](./assets/add.png)

2. При нажатии на кнопку редактировать форма автоматически заполняется данными элемента

![](./assets/edit.png)

Далее возможны два сценария:

2.1 Если пользователь нажал на кнопку Save, запись в таблице обновляется

2.2 Если пользователь нажал на кнопку Cancel, то поля вычищаются и снова отображается форма добавления

Бонусное задание: подумайте, как должно вести себя приложение, если вы при редактировании записи, нажмёте на удалить (крестик).