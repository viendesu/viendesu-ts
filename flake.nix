{
  description = "VienDesu! Typescript API library";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    self,
    flake-utils,
    nixpkgs,
  }:
    flake-utils.lib.eachDefaultSystem
      (system:
        let pkgs = import nixpkgs { inherit system; };
            base-pkgs = with pkgs; [
              nodejs_21
              yarn
              typescript
            ];
        in
        {
          devShells.default = pkgs.mkShell {
            buildInputs = base-pkgs ++ [
              pkgs.nodePackages_latest.ts-node
            ];
          };
        }
      );
}
