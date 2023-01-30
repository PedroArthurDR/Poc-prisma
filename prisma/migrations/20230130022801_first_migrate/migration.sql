-- CreateTable
CREATE TABLE "allMovies" (
    "id" SERIAL NOT NULL,
    "movieName" TEXT NOT NULL,
    "movieStream" TEXT NOT NULL,
    "genderId" INTEGER NOT NULL,
    "movieStatus" TEXT NOT NULL,
    "movieDescription" TEXT,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "allMovies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "moviesGenders" (
    "id" SERIAL NOT NULL,
    "genderName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "moviesGenders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "allMovies_movieName_key" ON "allMovies"("movieName");

-- CreateIndex
CREATE UNIQUE INDEX "moviesGenders_genderName_key" ON "moviesGenders"("genderName");

-- AddForeignKey
ALTER TABLE "allMovies" ADD CONSTRAINT "allMovies_fk0" FOREIGN KEY ("genderId") REFERENCES "moviesGenders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
