deploy: all push clean

all: build build/index.html

build:
	git worktree add build gh-pages

# Replace this rule with whatever builds your project
dist/index.html: src/index.html
	cp $< $@

push: all
	cd build && \
	git add --all && \
	git commit -m "Deploy to gh-pages" && \
	git push origin gh-pages

# Removing the actual dist directory confuses git and will require a git worktree prune to fix
clean:
	rm -rf build/*
