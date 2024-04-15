interface TreeNode<T> {
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;
}

interface BST<T> {
    root: TreeNode<T> | null;
    insert(value: T): void;
    search(value: T): TreeNode<T> | null;
    delete(value: T): void;
    inOrderTraversal(): void;
    preOrderTraversal(): void;
    postOrderTraversal(): void;
}

class BinarySearchTree<T> implements BST<T>{


    public root:TreeNode<T>;
    private def_val:T;
    constructor( def_val:T)
    {
        this.def_val = def_val;
        this.root =  { value : def_val , left : null, right : null};
    }

    private insert_util ( new_val : T  , curr : TreeNode<T>|null ): TreeNode<T> {
            if (curr== null ){
            let new_node : TreeNode<T> = { value : new_val , left : null , right : null};
            return new_node;
        }

            let val = curr.value;
            if ( val >new_val   )
            {
                curr.left = this.insert_util ( new_val , curr.left );
            }
            else if ( val < new_val)
            {
                 curr.right = this.insert_util ( new_val, curr.right);
            }
            
                return curr;
    }

    public insert( value : T ):void 
    {
        if ( this.root.value == this.def_val )
        {
            this.root.value = value;
            return;
        }
        else
        {
            this.insert_util ( value , this.root );
            // this.inorder_util( this.root);
            // console.log( " ");
        }
    }

     public search(search_val: T): TreeNode<T> | null {
        
        if ( this.root.value == this.def_val )
        {
            return null;
        }
        let curr = this.root;
        while( curr != null)
        {
            let x = curr.value;
            if ( x == search_val  )
            {
                return curr;
            }
            else if ( x  > search_val )
            {
                if( curr .left != null)
                curr = curr.left;
                else 
                    break;
            }
            else{
                if ( curr.right != null)
                {
                    curr = curr.right ;
                }
                else 
                    break;
            }
        }
        return null;
    }
    private get_left_max( node : TreeNode<T> ): T
    {
        if ( node.left == null )
            return node.value;

         node = node.left ;
         while ( node.right != null )
         {
            node = node .right;
         }
         return node.value;
    }
    public delete_util( curr: TreeNode<T> , del_val: T):TreeNode<T>|null
    {
        const x = curr.value;
        if ( curr == null)
        {
            return curr;
        }
        else if( x > del_val)
        {
            if( curr.left == null)
            {
                return null;
            }
            return curr.left= this.delete_util ( curr.left, del_val);
        }
        else if ( x < del_val)
        {
            if ( curr.right== null)
            {
                return null;
            }
            return curr.right = this.delete_util ( curr.right, del_val);
        }
        else 
        {
             if( curr.left == null && curr.right == null )
             {
                return null;
             }
             else if( curr.left != null && curr.right == null)
             {
                return curr.left ;
             }
             else if( curr.right != null && curr.left== null )
             {
                return curr.right;
             }
             else 
             {
                const left_max = this.get_left_max( curr);

                curr.value = left_max;

                return this.delete_util ( curr , left_max );
             }
        }
    }
    public  delete(value: T): void {
        
        if ( this.root.value == this.def_val )
        {
            return ;
        }
        
        this.delete_util( this.root , value );
    }

    private inorder_util ( curr_node : TreeNode<T> )
    {
        if( curr_node == null)
        {
            return;
        }
        if( curr_node.left != null)
        this.inorder_util (curr_node.left);
        
        console.log( curr_node.value);

        if ( curr_node.right  != null)
        {
            this.inorder_util (curr_node.right);
        }
        return;
    }


    public  inOrderTraversal(): void
    {
         let curr_node = this.root; 
        this.inorder_util(curr_node);
    }

    private preorder_util ( curr_node : TreeNode<T> ):void
    {
        if( curr_node == null)
        {
            return;
        }
        console.log( curr_node.value);
        if( curr_node.left != null)
        this.preorder_util (curr_node.left);
        if ( curr_node.right  != null)
        {
            this.preorder_util (curr_node.right);
        }
    }
    public preOrderTraversal(): void
    {
        this.preorder_util(this.root);
    }
    private postorder_util ( curr_node : TreeNode<T> ):void
    {
        if( curr_node == null)
        {
            return;
        }
        if ( curr_node.left  != null)
        {
            this.postorder_util (curr_node.left);
        }
        if( curr_node.right != null)
        this.postorder_util (curr_node.right);

        console.log( curr_node.value);
    }

    public  postOrderTraversal(): void {
        this.postorder_util(this.root);
    }
}


let myTree = new BinarySearchTree(Number.MAX_VALUE);

myTree.insert(1);

myTree.insert(2);

myTree.insert(3);

myTree.insert(4);

myTree.inOrderTraversal();
console.log( );

myTree.preOrderTraversal();
console.log();
myTree.postOrderTraversal();