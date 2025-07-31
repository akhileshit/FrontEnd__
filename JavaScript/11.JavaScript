    
08/01/25

kod title: Setting up the file structure and components











-Code - REACT/todo-app

=======================================================================================================================================
09/01/25

kod title: Creating the TaskList component

           










-Code - REACT/todo-app

=======================================================================================================================================
10/01/25

kod title: Progress Tracker Component




ALL RECORDINGS ENDED HERE!!














-Code - REACT/todo-app

=======================================================================================================================================
28/07/25

- Added the Front-end  contents to git and github
- Since ./Dummy and ./JavaScript/REACT/login were already a git repository, 
    i made them as git submodules by linking it to their respective repository
    - see .gitmodules folder
- Also before making this(FE) as git repository, removed the implicitly came .git folders from react projects other than ./login, 
    since they were not a git repository.


- REMEMBER: submodules are linked to the main repo by the "latest commit" made inside it!!!, 
    so make sure to always push all the changes made to the submodules. 
    or else you won't have link in github to the submodule and hence no contents when u clone it or try to access inside github!!! DO NOT FORGET.

- Want to clone/proper-download-with-.git ?
    - Normal clone     "git clone <repo-url>"      won't clone/download submodules!!
    - So use     "git clone --recurse-submodules <repo-url>"
    - If already normal cloned, use      "git submodule init"  &  "git submodule update"
    - All contents will be downloaded/cloned successfully.