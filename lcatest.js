  const { lowestCommonAncestor, Node } = require("./lca");

  //       7
  //      / \
  //     4   8
  //    / \
  //   1  5

  const root = new Node(7);
  root.left = new Node(4);
  root.left.left = new Node(1);
  root.left.right = new Node(5);
  root.right = new Node(8);
  
  describe("lowest common ancestor", () => {
    test("it should return 7", () => {
      expect(lowestCommonAncestor(root, 1, 8)).toBe(7);
    });
  });

  const root2 = new Node(2);
  root2.left = new Node(7);
  root2.left.left = new Node(8);
  root2.left.right = new Node(6);
  root2.right = new Node(5);

  describe("lowest common ancestor", () => {
    test("it should return 7", () => {
      expect(lowestCommonAncestor(root2, 8, 5)).toBe(2);
    });
  });